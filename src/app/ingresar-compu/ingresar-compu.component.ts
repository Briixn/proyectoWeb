import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ingresar-compu',
  templateUrl: './ingresar-compu.component.html',
  styleUrls: ['./ingresar-compu.component.css']
})
export class IngresarCompuComponent implements OnInit {

  constructor(private _itemServicio: ItemServicio,
              private _router: Router) { }

  nombreComputadora = "";
  tipoComputadora = "";
  fabricanteComputadora = "";
  modeloComputadora = "";
  numeroSerieComputadora = "";
  numeroInventarioComputadora = "";
  localizacionComputadora = "";
  estadoComputadora = "";
  adquisicionComputadora = "";
  proveedorComputadora = "";
  ultimoMantenimientoComputadora = "";
  ultimaActualizacionComputadora = "";
  empleadoComputadora = "";
  comentarioComputadora = "";
  estado = false;
  ngOnInit() {
  }

  guardar() {
    if(this.nombreComputadora === "" &&
    this.tipoComputadora === "" &&
    this.fabricanteComputadora === "" &&
    this.modeloComputadora === "" &&
    this.numeroSerieComputadora === "" &&
    this.numeroInventarioComputadora === "" &&
    this.localizacionComputadora === "" &&
    this.estadoComputadora === "" &&
    this.adquisicionComputadora === "" &&
    this.proveedorComputadora === "" &&
    this.ultimoMantenimientoComputadora === "" &&
    this.ultimaActualizacionComputadora === "" &&
    this.empleadoComputadora === "") {
      this.estado = true;
      console.log("Error campos vacios");
    } else {
      this._itemServicio.saveComputadora(this.nombreComputadora, this.tipoComputadora, this.fabricanteComputadora, this.modeloComputadora, this.numeroSerieComputadora, this.numeroInventarioComputadora, this.localizacionComputadora, this.estadoComputadora, this.adquisicionComputadora, this.proveedorComputadora, this.ultimoMantenimientoComputadora, this.ultimaActualizacionComputadora, this.empleadoComputadora, this.comentarioComputadora);
      this._router.navigate(['/mostrar-computadora']);
    }
  }

}
