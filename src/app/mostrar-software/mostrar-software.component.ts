import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";

@Component({
  selector: 'app-mostrar-software',
  templateUrl: './mostrar-software.component.html',
  styleUrls: ['./mostrar-software.component.css']
})
export class MostrarSoftwareComponent implements OnInit {

  constructor(private _itemServicio: ItemServicio) { }

  softwares = [];

  ngOnInit() {
    this._itemServicio.getItem("software").subscribe(
      (result: any[]) => {
        this.softwares = result;
        console.log(this.softwares);
      }
    );
  }

}
