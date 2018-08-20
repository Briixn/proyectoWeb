import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";

@Component({
  selector: 'app-mostrar-monitor',
  templateUrl: './mostrar-monitor.component.html',
  styleUrls: ['./mostrar-monitor.component.css']
})
export class MostrarMonitorComponent implements OnInit {

  constructor(private _itemServicio: ItemServicio) { }

  monitores = [];

  ngOnInit() {
    this._itemServicio.getItem("monitor").subscribe(
      (result: any[]) => {
        this.monitores = result;
        console.log(this.monitores);
      }
    );
  }
}
