import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    idItem: number;

    @Column({ length: 500 })
    elemento: string;

    @Column({ length: 500 })
    nombreItem: string;

    @Column({ length: 500 })
    tipo: string;

    @Column({ length: 500 })
    fabricante: string;

    @Column({ length: 500 })
    modelo: string;

    @Column()
    tamanio: number;

    @Column({ length: 500 })
    licencia: string;

    @Column({ length: 500 })
    arquitectura: string;

    @Column({ length: 500 })
    tiempoValidez: string;

    @Column({ length: 500 })
    numeroSerie: string;

    @Column({ length: 500 })
    numeroInventario: string;

    @Column({ length: 500 })
    localizacion: string;

    @Column({ length: 500 })
    estado: string;

    @Column({ length: 500 })
    anioAdquisicion: string;

    @Column({ length: 500 })
    proveedor: string;

    @Column({ length: 500 })
    ultimoMantenimiento: string;

    @Column({ length: 500 })
    ultimaActualizacion: string;

    @Column({ length: 500 })
    empleado: string;

    @Column({ length: 500 })
    comentario: string;
}