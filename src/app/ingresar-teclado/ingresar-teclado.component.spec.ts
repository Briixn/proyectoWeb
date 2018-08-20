import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarTecladoComponent } from './ingresar-teclado.component';

describe('IngresarTecladoComponent', () => {
  let component: IngresarTecladoComponent;
  let fixture: ComponentFixture<IngresarTecladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarTecladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarTecladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
