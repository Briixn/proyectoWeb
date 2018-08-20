import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";

@Component({
    selector: 'app-mostrar-compu',
    templateUrl: './mostrar-compu.component.html',
    styleUrls: ['./mostrar-compu.component.css']
})
export class MostrarCompuComponent implements OnInit {

    constructor(private _itemServicio: ItemServicio) { }

    computadoras = [];

    ngOnInit() {
      this._itemServicio.getItem("computadora").subscribe(
        (result: any[]) => {
          this.computadoras = result;
          console.log(this.computadoras);
        }
      );
    }
}
