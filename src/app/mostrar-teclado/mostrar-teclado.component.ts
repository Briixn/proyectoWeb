import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";

@Component({
  selector: 'app-mostrar-teclado',
  templateUrl: './mostrar-teclado.component.html',
  styleUrls: ['./mostrar-teclado.component.css']
})
export class MostrarTecladoComponent implements OnInit {

  constructor(private _itemServicio: ItemServicio) { }

  teclados = [];

  ngOnInit() {
    this._itemServicio.getItem("teclado").subscribe(
      (result: any[]) => {
        this.teclados = result;
        console.log(this.teclados);
      }
    );
  }

}
