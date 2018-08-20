import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingresar-software',
  templateUrl: './ingresar-software.component.html',
  styleUrls: ['./ingresar-software.component.css']
})
export class IngresarSoftwareComponent implements OnInit {

  constructor(private _itemServicio: ItemServicio,
              private _router: Router) { }

  nombreSoftware = "";
  fabricanteSoftware = "";
  codigoLicencia = "";
  arquitectura = "";
  tiempoValidez = "";
  adquisionSoftware = "";
  proveedorSoftware = "";
  empleadoSoftware = "";
  comentarioSodtware = "";
  estado = false;

  ngOnInit() {
  }

  guardar() {
    if(this.nombreSoftware === "" &&
      this.fabricanteSoftware === "" &&
      this.codigoLicencia === "" &&
      this.arquitectura === "" &&
      this.tiempoValidez === "" &&
      this.adquisionSoftware === "" &&
      this.proveedorSoftware === "" &&
      this.empleadoSoftware === "") {
      this.estado = true;
      console.log("Error campos vacios");
    }
    else {
      this._itemServicio.saveSoftware(this.nombreSoftware, this.fabricanteSoftware, this.codigoLicencia, this.arquitectura, this.tiempoValidez, this.adquisionSoftware, this.proveedorSoftware, this.empleadoSoftware, this.comentarioSodtware).subscribe();
      this._router.navigate(['/mostrar-software']);
    }
  }
}
