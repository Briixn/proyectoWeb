import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";

@Component({
  selector: 'app-mostrar-impresora',
  templateUrl: './mostrar-impresora.component.html',
  styleUrls: ['./mostrar-impresora.component.css']
})
export class MostrarImpresoraComponent implements OnInit {

  constructor(private _itemServicio: ItemServicio) { }

  impresoras = [];

  ngOnInit() {
    this._itemServicio.getItem("impresora").subscribe(
      (result: any[]) => {
        this.impresoras = result;
        console.log(this.impresoras);
      }
    );
  }

}
