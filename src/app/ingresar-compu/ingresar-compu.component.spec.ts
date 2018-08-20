import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCompuComponent } from './ingresar-compu.component';

describe('IngresarCompuComponent', () => {
    let component: IngresarCompuComponent;
    let fixture: ComponentFixture<IngresarCompuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ IngresarCompuComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IngresarCompuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});