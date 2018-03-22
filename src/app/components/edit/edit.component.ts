import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  FormGroupDirective,
  AbstractControl
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { CoinService } from '../../coin.service';
import { ActivatedRoute, Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class FormControlValidation implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  coin: any;
  coinForm: FormGroup;
  title = 'Edit Coin';
  constructor(private route: ActivatedRoute, private router: Router, private service: CoinService, private fb: FormBuilder) {
    this.createForm();
  }
  coinName = new FormControl('', [
    Validators.required
  ]);
  coinVal = new FormControl('', [
    Validators.required,
    Validators.min(1)
  ]);

  resetForm(formGroup: FormGroup) {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }

  createForm() {
    this.coinForm = this.fb.group({
      coinName: new FormControl('', [
        Validators.required
      ]),
      coinVal: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ])
    });
  }

  updateCoin(name, price) {
    this.route.params.subscribe(params => {
      this.service.updateCoin(name, price, params['id']);
      this.router.navigate(['index']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this.service.editCoin(params['id']).subscribe(res => {
        this.coin = res;
      });
    });
  }
}
