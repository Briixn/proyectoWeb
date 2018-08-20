import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarImpresoraComponent } from './mostrar-impresora.component';

describe('MostrarImpresoraComponent', () => {
  let component: MostrarImpresoraComponent;
  let fixture: ComponentFixture<MostrarImpresoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarImpresoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarImpresoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
