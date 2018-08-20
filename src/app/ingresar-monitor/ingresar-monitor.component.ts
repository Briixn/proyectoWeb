import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingresar-monitor',
  templateUrl: './ingresar-monitor.component.html',
  styleUrls: ['./ingresar-monitor.component.css']
})
export class IngresarMonitorComponent implements OnInit {



  constructor(private _itemServicio: ItemServicio,
              private _router: Router) { }

  nombreMonitor = "";
  tipoMonitor = "";
  fabricanteMonitor = "";
  modeloMonitor = "";
  tamanio = "";
  numeroSerieMonitor = "";
  numeroInventarioMonitor = "";
  localizacionMonitor = "";
  estadoMonitor = "";
  adquisicionMonitor = "";
  proveedorMonitor = "";
  empleadoMonitor = "";
  comentarioMonitor = "";
  estado = false;

  ngOnInit() {
  }

  guardar() {
    if(this.nombreMonitor === "" &&
      this.tipoMonitor === "" &&
      this.fabricanteMonitor === "" &&
      this.modeloMonitor === "" &&
      this.tamanio ===  "" &&
      this.numeroSerieMonitor === "" &&
      this.numeroInventarioMonitor === "" &&
      this.localizacionMonitor === "" &&
      this.estadoMonitor === "" &&
      this.adquisicionMonitor === "" &&
      this.proveedorMonitor === "" &&
      this.empleadoMonitor === ""
    ){
      this.estado = true;
      console.log("Error campos vacios");
    } else {
      this._itemServicio.saveMonitor(this.nombreMonitor, this.tipoMonitor, this.fabricanteMonitor, this.modeloMonitor, this.tamanio, this.numeroSerieMonitor, this.numeroInventarioMonitor, this.localizacionMonitor, this.estadoMonitor, this.adquisicionMonitor, this.proveedorMonitor, this.empleadoMonitor,this.comentarioMonitor);
      this._router.navigate(['/mostrar-monitor']);
    }
  }

}
