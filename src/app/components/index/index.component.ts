import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {
  MatTableDataSource,
  MatSnackBar
} from '@angular/material';

import { CoinService } from './../../coin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  coins: any;
  displayedColumns = ['name', 'price', 'action'];
  dataSource = this.coins;

  constructor(
    private http: HttpClient,
    private service: CoinService,
    public snackBar: MatSnackBar
  ) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getCoins() {
    this.service.getCoins().subscribe(res => {
      this.coins = res;
      this.dataSource = new MatTableDataSource(this.coins);
    });
  }

  deleteCoin(id) {
    this.service.deleteCoin(id).subscribe(res => {
      this.getCoins();
      this.openSnackBar('Successfully Deleted', 'ok');
    });
  }

  ngOnInit() {
    this.getCoins();
  }
}
