import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMonitorComponent } from './mostrar-monitor.component';

describe('MostrarMonitorComponent', () => {
  let component: MostrarMonitorComponent;
  let fixture: ComponentFixture<MostrarMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
