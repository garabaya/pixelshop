import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from '../validators/urls.validator';

@Component({
  selector: 'app-formularioreactivo',
  templateUrl: './formularioreactivo.component.html',
  styleUrls: ['./formularioreactivo.component.css']
})
export class FormularioreactivoComponent implements OnInit {

  formulario: FormGroup;
  patern: string | RegExp = "[a-z.a-z ]*";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.patern), ValidateUrl]],
      password: ['', Validators.required]
    });
  }
  onSubmit(formulario){

  }

}
