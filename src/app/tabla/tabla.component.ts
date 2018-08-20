import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tabla',
    templateUrl: './tabla.component.html',
    styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

    @Input() nombre:string;
    @Input() tipo:string;
    @Input() fabricante:string;
    @Input() serie:string;
    @Input() inventario:string;
    @Input() localizacion:string;
    @Input() estado:string;
    @Input() comentario:string;



    constructor() { }

    ngOnInit() {
    }

}