import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCompuComponent } from './mostrar-compu.component';

describe('MostrarCompuComponent', () => {
    let component: MostrarCompuComponent;
    let fixture: ComponentFixture<MostrarCompuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MostrarCompuComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MostrarCompuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});