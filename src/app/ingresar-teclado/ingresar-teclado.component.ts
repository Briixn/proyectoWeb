import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingresar-teclado',
  templateUrl: './ingresar-teclado.component.html',
  styleUrls: ['./ingresar-teclado.component.css']
})
export class IngresarTecladoComponent implements OnInit {

  constructor(private _itemServicio: ItemServicio,
              private _router: Router) { }

  nombreTeclado = "";
  tipoTeclado = "";
  fabricanteTeclado = "";
  modeloTeclado = "";
  numeroSerieTeclado = "";
  numeroInventarioTeclado = "";
  localizacionTeclado = "";
  estadoTeclado = "";
  adquisicionTeclado = "";
  proveedorTeclado = "";
  empleadoTeclado = "";
  comentarioTeclado = "";
  estado = false;

  ngOnInit() {
  }

  guardar() {
    if(this.nombreTeclado === "" &&
    this.tipoTeclado === "" &&
    this.fabricanteTeclado === "" &&
    this.modeloTeclado === "" &&
    this.numeroSerieTeclado === "" &&
    this.numeroInventarioTeclado === "" &&
    this.localizacionTeclado === "" &&
    this.estadoTeclado === "" &&
    this.adquisicionTeclado === "" &&
    this.proveedorTeclado === "" &&
    this.empleadoTeclado === "") {
      this.estado = true;
      console.log("Error campos vacios");
    } else {
      this._itemServicio.saveTeclado(this.nombreTeclado, this.tipoTeclado, this.fabricanteTeclado, this.modeloTeclado, this.numeroSerieTeclado, this.numeroInventarioTeclado, this.localizacionTeclado, this.estadoTeclado, this.adquisicionTeclado, this.proveedorTeclado, this.empleadoTeclado, this.comentarioTeclado);
      this._router.navigate(['/mostrar-teclado']);
    }
  }

}
