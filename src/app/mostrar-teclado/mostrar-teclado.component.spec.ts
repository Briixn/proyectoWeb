import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTecladoComponent } from './mostrar-teclado.component';

describe('MostrarTecladoComponent', () => {
  let component: MostrarTecladoComponent;
  let fixture: ComponentFixture<MostrarTecladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarTecladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTecladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
