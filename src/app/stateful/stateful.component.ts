import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../interfaces/product';
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  @ViewChild(ConfirmComponent, {static: false})
  confirmChild: ConfirmComponent;

  shopModel: Shop = new Shop();
  boughtItems: Array<Product>;  

  constructor() {
    this.boughtItems = [];
  }

  ngOnInit(): void {
  }

  clickItem(_curso) {
    this.boughtItems.push(_curso)
    this.confirmChild.boughtItems=this.boughtItems;
    this.confirmChild.total=this.getTotal();
  }

  cursoMatriculado(_event: Product) {
    this.clickItem(_event);
    this.confirmChild.isDisabled = false;
  }

  hayCompras(): boolean {
    if (this.boughtItems.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  getTotal() {
    if (this.boughtItems){
      return this.boughtItems.reduce(
        (prev: number, item: Product) => prev + item.price, 0
      );
    }    
  }
  
  confirmar() {
    this.boughtItems = [];
  }

}
