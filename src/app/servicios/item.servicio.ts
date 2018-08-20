import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {UsuarioServicio} from "./usuario.servicio";

@Injectable()
export class ItemServicio {

  constructor(private http:HttpClient) {

  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json, application/x-www-form-urlencoded");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getItem(element) {
    let header = UsuarioServicio.getCommonHeaders();
    return this.http.get(`http://localhost:3000/Item/${element}`, {headers: header});
  }

  saveSoftware(nombreSoftware:string, fabricanteSoftware:string, licencia:string, arquitectura:string, tiempoValidez:string, adquisicionSoftware:string, proveedorSoftware:string, empleadoSoftware:string, comentarioSoftware:string) {
    let header = UsuarioServicio.getCommonHeaders();
    let body = new HttpParams();
    body = body.set('elemento', "software");
    body = body.set('nombreItem', nombreSoftware.toString());
    body = body.set('fabricante', fabricanteSoftware.toString());
    body = body.set('licencia', licencia.toString());
    body = body.set('arquitectura', arquitectura.toString());
    body = body.set('tiempoValidez', tiempoValidez.toString());
    body = body.set('anioAdquisicion', adquisicionSoftware.toString());
    body = body.set('proveedor', proveedorSoftware.toString());
    body = body.set('empleado', empleadoSoftware.toString());
    body = body.set('comentario', comentarioSoftware.toString());

    return this.http.post(`http://localhost:3000/Item/Software`, body, {headers: header});
  }

  saveMonitor(nombreMonitor:string, tipoMonitor:string, fabricanteMonitor:string, modeloMonitor:string, tamanio:string, serieMonitor:string, inventarioMonitor:string, localizacionMonitor:string, estadoMonitor:string, adquisicionMonitor:string, proveedorMonitor:string, empleadoMonitor:string, comentarioMonitor:string) {
    let header = UsuarioServicio.getCommonHeaders();
    let body = new HttpParams();
    body = body.set('elemento', "monitor");
    body = body.set('nombreItem', nombreMonitor.toString());
    body = body.set('tipo', tipoMonitor.toString());
    body = body.set('fabricante', fabricanteMonitor.toString());
    body = body.set('modelo', modeloMonitor.toString());
    body = body.set('tamanio', tamanio.toString());
    body = body.set('numeroSerie', serieMonitor.toString());
    body = body.set('numeroInventario', inventarioMonitor.toString());
    body = body.set('localizacion', localizacionMonitor.toString());
    body = body.set('estado', estadoMonitor.toString());
    body = body.set('anioAdquisicion', adquisicionMonitor.toString());
    body = body.set('proveedor', proveedorMonitor.toString());
    body = body.set('empleado', empleadoMonitor.toString());
    body = body.set('comentario', comentarioMonitor.toString());

    return this.http.post(`http://localhost:3000/Item/Monitor`, body, {headers: header});
  }

  saveImpresora(nombreImpresora:string, tipoImpresora:string, fabricanteImpresora:string, modeloImpresora:string, serieImpresora:string, inventarioImpresora:string, localizacionImpresora:string, estadoImpresora:string, adquisicionImpresora:string, proveedorImpresora:string, mantenimientoImpresora:string, empleadoImpresora:string, comentarioImpresora:string) {
    let header = UsuarioServicio.getCommonHeaders();
    let body = new HttpParams();
    body = body.set('elemento', "monitor");
    body = body.set('nombreItem', nombreImpresora.toString());
    body = body.set('tipo', tipoImpresora.toString());
    body = body.set('fabricante', fabricanteImpresora.toString());
    body = body.set('modelo', modeloImpresora.toString());
    body = body.set('numeroSerie', serieImpresora.toString());
    body = body.set('numeroInventario', inventarioImpresora.toString());
    body = body.set('localizacion', localizacionImpresora.toString());
    body = body.set('estado', estadoImpresora.toString());
    body = body.set('anioAdquisicion', adquisicionImpresora.toString());
    body = body.set('proveedor', proveedorImpresora.toString());
    body = body.set('ultimoMantenimiento', mantenimientoImpresora.toString());
    body = body.set('empleado', empleadoImpresora.toString());
    body = body.set('comentario', comentarioImpresora.toString());

    return this.http.post(`http://localhost:3000/Item/Impresora`, body, {headers: header});
  }

  saveTeclado(nombreTeclado:string, tipoTeclado:string, fabricanteTeclado:string, modeloTeclado:string, serieTeclado:string, inventarioTeclado:string, localizacionTeclado:string, estadoTeclado:string, adquisicionTeclado:string, proveedorTeclado:string, empleadoTeclado:string, comentarioTeclado:string) {
    let header = UsuarioServicio.getCommonHeaders();
    let body = new HttpParams();
    body = body.set('elemento', "monitor");
    body = body.set('nombreItem', nombreTeclado.toString());
    body = body.set('tipo', tipoTeclado.toString());
    body = body.set('fabricante', fabricanteTeclado.toString());
    body = body.set('modelo', modeloTeclado.toString());
    body = body.set('numeroSerie', serieTeclado.toString());
    body = body.set('numeroInventario', inventarioTeclado.toString());
    body = body.set('localizacion', localizacionTeclado.toString());
    body = body.set('estado', estadoTeclado.toString());
    body = body.set('anioAdquisicion', adquisicionTeclado.toString());
    body = body.set('proveedor', proveedorTeclado.toString());
    body = body.set('empleado', empleadoTeclado.toString());
    body = body.set('comentario', comentarioTeclado.toString());

    return this.http.post(`http://localhost:3000/Item/Teclado`, body, {headers: header});
  }

  saveComputadora(nombreComputadora:string, tipoComputadora:string, fabricanteComputadora:string, modeloComputadora:string, serieComputadora:string, inventarioComputadora:string, localizacionComputadora:string, estadoComputadora:string, adquisicionComputadora:string, proveedorComputadora:string, mantenimientoComputadora:string, actualizacionComputadora:string, empleadoComputadora:string, comentarioComputadora:string) {
    let header = UsuarioServicio.getCommonHeaders();
    let body = new HttpParams();
    body = body.set('elemento', "monitor");
    body = body.set('nombreItem', nombreComputadora.toString());
    body = body.set('tipo', tipoComputadora.toString());
    body = body.set('fabricante', fabricanteComputadora.toString());
    body = body.set('modelo', modeloComputadora.toString());
    body = body.set('numeroSerie', serieComputadora.toString());
    body = body.set('numeroInventario', inventarioComputadora.toString());
    body = body.set('localizacion', localizacionComputadora.toString());
    body = body.set('estado', estadoComputadora.toString());
    body = body.set('anioAdquisicion', adquisicionComputadora.toString());
    body = body.set('proveedor', proveedorComputadora.toString());
    body = body.set('ultimoMantenimiento', mantenimientoComputadora.toString());
    body = body.set('ultimaActualizacion', actualizacionComputadora.toString());
    body = body.set('empleado', empleadoComputadora.toString());
    body = body.set('comentario', comentarioComputadora.toString());

    return this.http.post(`http://localhost:3000/Item/Computadora`, body, {headers: header});
  }
}
