import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({ length: 500 })
    user: string;

    @Column({ length: 500 })
    password: string;

    @Column({ length: 500 })
    nombreUsuario: string;

    @Column({ length: 500 })
    apellidoUsuario: string;
}