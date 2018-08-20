import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarImpresoraComponent } from './ingresar-impresora.component';

describe('IngresarImpresoraComponent', () => {
  let component: IngresarImpresoraComponent;
  let fixture: ComponentFixture<IngresarImpresoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarImpresoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarImpresoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
