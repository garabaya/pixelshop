import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Product } from '../interfaces/product';
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit, OnDestroy {

  errorHttp: boolean;
  //shopModel: Shop = new Shop();
  shopModel: any;
  boughtItems: Array<Product>; 

  @ViewChild(ConfirmComponent, {static: false})
  confirmChild: ConfirmComponent;

   private shopSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.boughtItems = [];
    this.shopModel = {shopItems: []};
  }

  ngOnInit(): void {
    this.shopModel = this.http.get('assets/json/cursos.json').subscribe(
      (respuesta: Response) => { this.shopModel.shopItems = respuesta;},
      (respuesta: Response) => { this.errorHttp = true;}
      );
      this.onGlobalKeyboard();
  }
  ngOnDestroy() {
    document.removeEventListener('keypress', this.onGlobalKeyboard);
    this.shopSubscription.unsubscribe();
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
  

  /* onConfirm() {
    alert('Has añadido un curso');
  } */

  onKeyboard(_event) {
    if (_event.code=="Enter") {
      alert('Has pulsado ' + _event.code);
    }
  }

  onGlobalKeyboard() {
    document.addEventListener('keypress', (eventoGlobal) => {
      this.onKeyboard(eventoGlobal);
    })
  }

}
