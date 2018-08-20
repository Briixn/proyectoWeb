import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarSoftwareComponent } from './mostrar-software.component';

describe('MostrarSoftwareComponent', () => {
  let component: MostrarSoftwareComponent;
  let fixture: ComponentFixture<MostrarSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
