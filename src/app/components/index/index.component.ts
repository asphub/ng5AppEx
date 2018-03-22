import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {
  MatTableDataSource
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
    private service: CoinService
  ) { }

  getCoins() {
    this.service.getCoins().subscribe(res => {
      this.coins = res;
      this.dataSource = new MatTableDataSource(this.coins);
    });
  }

  deleteCoin(id) {
    this.service.deleteCoin(id).subscribe(res => {
      this.getCoins();
    });
  }

  ngOnInit() {
    this.getCoins();
  }
}
