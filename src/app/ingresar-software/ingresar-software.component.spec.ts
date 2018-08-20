import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarSoftwareComponent } from './ingresar-software.component';

describe('IngresarSoftwareComponent', () => {
  let component: IngresarSoftwareComponent;
  let fixture: ComponentFixture<IngresarSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
