import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Output() confirmado: EventEmitter<boolean> = new EventEmitter();

  isDisabled: boolean;
  modalShowed: boolean;
  saved: boolean;
  boughtItems: Array<Product>;
  total: number;

  constructor() { }

  ngOnInit(): void {
    this.isDisabled = true;
    this.modalShowed = false;
    this.saved = false;
  }

  confirmar() {
    this.confirmado.emit(true);
  }

  getTotal() {
    return this.total;
  }

}
