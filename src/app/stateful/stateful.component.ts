import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { Shop } from '../models/shop.model';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {
  
  shopModel: Shop = new Shop();
  boughtItems: Array<Product>;

  constructor() {
    this.boughtItems = [];
   }

  ngOnInit(): void {
  }

  clickItem(_curso) {
    this.boughtItems.push(_curso);
  }

}
