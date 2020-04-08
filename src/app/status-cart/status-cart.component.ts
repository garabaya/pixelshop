import { Component, OnInit, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})
export class StatusCartComponent implements OnInit, OnChanges {

  @Input() price: number;
  @Input() shopModel: Array<Product>;
  @Input() add: EventEmitter<null> = new EventEmitter();

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  confirm() {
    this.add.emit();
  }

}
