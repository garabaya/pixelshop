import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioreactivoComponent } from './formularioreactivo.component';

describe('FormularioreactivoComponent', () => {
  let component: FormularioreactivoComponent;
  let fixture: ComponentFixture<FormularioreactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioreactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioreactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
