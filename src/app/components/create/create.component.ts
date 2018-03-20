import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { CoinService } from '../../coin.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class FormControlValidation implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  coinForm: FormGroup;
  constructor(private coinservice: CoinService, private fb: FormBuilder) {
    this.createForm();
  }

  coinName = new FormControl('', [
    Validators.required
  ]);
  coinVal = new FormControl('', [
    Validators.required,
    Validators.min(1)
  ]);

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
  addCoin(name, price) {
    this.coinservice.addCoin(name, price);
  }

  ngOnInit() {
  }
}
