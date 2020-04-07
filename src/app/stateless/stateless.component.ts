import { ChangeDetection } from '@angular/cli/lib/config/schema';
import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush //Para que no instancie todos los elementos stateles cada vez (Política de detección de cambios)
                                                 //Le decimos que solo lo haga en el push
})
export class StatelessComponent implements OnInit {

  @Output() cursoMatriculado: EventEmitter<Product> = new EventEmitter();

  @Input () product: Product;
  public matricula: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = "Seleccionar";
  }

  matricularse() {
    this.disable = true;
    this.matricula = 'Seleccionado';
    this.cursoMatriculado.emit(this.product);
  }
  
  isDisabled() {
    return this.disable;
  }

}
