import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingresar-impresora',
  templateUrl: './ingresar-impresora.component.html',
  styleUrls: ['./ingresar-impresora.component.css']
})
export class IngresarImpresoraComponent implements OnInit {

  constructor(private _itemServicio: ItemServicio,
              private _router: Router) { }

  nombreImpresora = "";
  tipoImpresora = "";
  fabricanteImpresora = "";
  modeloImpresora = "";
  numeroSerieImpresora = "";
  numeroInventarioImpresora = "";
  localizacionImpresora = "";
  estadoImpresora = "";
  adquisicionImpresora = "";
  proveedorImpresora = "";
  ultimoMantenimientoImpresora = "";
  empleadoImpresora = "";
  comentarioImpresora = "";
  estado = false;

  ngOnInit() {
  }

  guardar() {
    if(this.nombreImpresora === "" &&
    this.tipoImpresora === "" &&
    this.fabricanteImpresora === "" &&
    this.modeloImpresora === "" &&
    this.numeroSerieImpresora === "" &&
    this.numeroInventarioImpresora === "" &&
    this.localizacionImpresora === "" &&
    this.estadoImpresora === "" &&
    this.adquisicionImpresora === "" &&
    this.proveedorImpresora === "" &&
    this.ultimoMantenimientoImpresora === "" &&
    this.empleadoImpresora === "") {
      this.estado = true;
      console.log("Error campos vacios");
    } else {
      this._itemServicio.saveImpresora(this.nombreImpresora, this.tipoImpresora, this.fabricanteImpresora, this.modeloImpresora, this.numeroSerieImpresora, this.numeroInventarioImpresora, this.localizacionImpresora, this.estadoImpresora, this.adquisicionImpresora, this.proveedorImpresora, this.ultimoMantenimientoImpresora, this.empleadoImpresora, this.comentarioImpresora);
      this._router.navigate(['/mostrar-impresora']);
    }
  }
}
