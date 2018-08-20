import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarMonitorComponent } from './ingresar-monitor.component';

describe('IngresarMonitorComponent', () => {
  let component: IngresarMonitorComponent;
  let fixture: ComponentFixture<IngresarMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
