import {Body, Controller, Get, HttpStatus, Param, Post, Req, Res} from "@nestjs/common";
import {ItemService} from "./item.service";
import {ItemEntity} from "./item.entity";

@Controller('Item')
export class ItemController {

    constructor(private _itemService: ItemService) {

    }

    @Post('/Computadora')
    crearItem(@Body() bodyParams) {
        const itemNuevo = new ItemEntity();
        itemNuevo.elemento = bodyParams.elemento;
        itemNuevo.nombreItem = bodyParams.nombreItem;
        itemNuevo.tipo = bodyParams.tipo;
        itemNuevo.fabricante = bodyParams.fabricante;
        itemNuevo.modelo = bodyParams.modelo;
        itemNuevo.numeroSerie = bodyParams.numeroSerie;
        itemNuevo.numeroInventario = bodyParams.numeroInventario;
        itemNuevo.localizacion = bodyParams.localizacion;
        itemNuevo.estado = bodyParams.estado;
        itemNuevo.anioAdquisicion = bodyParams.anioAdquisicion;
        itemNuevo.proveedor = bodyParams.proveedor;
        itemNuevo.ultimoMantenimiento = bodyParams.ultimoMantenimiento;
        itemNuevo.ultimaActualizacion = bodyParams.ultimaActualizacion;
        itemNuevo.empleado = bodyParams.empleado;
        itemNuevo.comentario = bodyParams.comentario;

        return this._itemService.crearItem(itemNuevo);
    }

    @Post('/Impresora')
    crearImpresora(@Body() bodyParams) {
        const itemNuevo = new ItemEntity();
        itemNuevo.elemento = bodyParams.elemento;
        itemNuevo.nombreItem = bodyParams.nombreItem;
        itemNuevo.tipo = bodyParams.tipo;
        itemNuevo.fabricante = bodyParams.fabricante;
        itemNuevo.modelo = bodyParams.modelo;
        itemNuevo.numeroSerie = bodyParams.numeroSerie;
        itemNuevo.numeroInventario = bodyParams.numeroInventario;
        itemNuevo.localizacion = bodyParams.localizacion;
        itemNuevo.estado = bodyParams.estado;
        itemNuevo.anioAdquisicion = bodyParams.anioAdquisicion;
        itemNuevo.proveedor = bodyParams.proveedor;
        itemNuevo.ultimoMantenimiento = bodyParams.ultimoMantenimiento;
        itemNuevo.empleado = bodyParams.empleado;
        itemNuevo.comentario = bodyParams.comentario;

        return this._itemService.crearItem(itemNuevo);
    }

    @Post('/Monitor')
    crearMonitor(@Body() bodyParams) {
        const itemNuevo = new ItemEntity();
        itemNuevo.elemento = bodyParams.elemento;
        itemNuevo.nombreItem = bodyParams.nombreItem;
        itemNuevo.tipo = bodyParams.tipo;
        itemNuevo.fabricante = bodyParams.fabricante;
        itemNuevo.modelo = bodyParams.modelo;
        itemNuevo.tamanio = bodyParams.tamanio;
        itemNuevo.numeroSerie = bodyParams.numeroSerie;
        itemNuevo.numeroInventario = bodyParams.numeroInventario;
        itemNuevo.localizacion = bodyParams.localizacion;
        itemNuevo.estado = bodyParams.estado;
        itemNuevo.anioAdquisicion = bodyParams.anioAdquisicion;
        itemNuevo.proveedor = bodyParams.proveedor;
        itemNuevo.empleado = bodyParams.empleado;
        itemNuevo.comentario = bodyParams.comentario;

        return this._itemService.crearItem(itemNuevo);
    }

    @Post('/Teclado')
    crearTeclado(@Body() bodyParams) {
        const itemNuevo = new ItemEntity();
        itemNuevo.elemento = bodyParams.elemento;
        itemNuevo.nombreItem = bodyParams.nombreItem;
        itemNuevo.tipo = bodyParams.tipo;
        itemNuevo.fabricante = bodyParams.fabricante;
        itemNuevo.modelo = bodyParams.modelo;
        itemNuevo.numeroSerie = bodyParams.numeroSerie;
        itemNuevo.numeroInventario = bodyParams.numeroInventario;
        itemNuevo.localizacion = bodyParams.localizacion;
        itemNuevo.estado = bodyParams.estado;
        itemNuevo.anioAdquisicion = bodyParams.anioAdquisicion;
        itemNuevo.proveedor = bodyParams.proveedor;
        itemNuevo.empleado = bodyParams.empleado;
        itemNuevo.comentario = bodyParams.comentario;

        return this._itemService.crearItem(itemNuevo);
    }

    @Post('/Software')
    crearSoftware(@Body() bodyParams) {
        const itemNuevo = new ItemEntity();
        itemNuevo.elemento = bodyParams.elemento;
        itemNuevo.nombreItem = bodyParams.nombreItem;
        itemNuevo.fabricante = bodyParams.fabricante;
        itemNuevo.licencia = bodyParams.licencia;
        itemNuevo.arquitectura = bodyParams.arquitectura;
        itemNuevo.tiempoValidez = bodyParams.tiempoValidez;
        itemNuevo.anioAdquisicion = bodyParams.anioAdquisicion;
        itemNuevo.proveedor = bodyParams.proveedor;
        itemNuevo.empleado = bodyParams.empleado;
        itemNuevo.comentario = bodyParams.comentario;

        return this._itemService.crearItem(itemNuevo);
    }


    @Get('/:element')
    async listarTodos(@Res() response,
                      @Req() request,
                      @Param() paramParams) {
        const items = await this._itemService.listarTodos(paramParams.element);
        if(Object.keys(items).length === 0) {
            return response.send({
                mensaje: "No existe ningun Item",
                estado: HttpStatus.NOT_FOUND,
            });
        } else {
            return response.status(202).send(items);
        }
    }
}