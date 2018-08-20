import {Injectable} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {getManager, Repository} from "typeorm";
import {ItemEntity} from "../item/item.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsuarioService {


    constructor(@InjectRepository(UsuarioEntity)
                private readonly  manager: Repository<UsuarioEntity>) {

    }

    crearUsuario(usuario: UsuarioEntity) {
        const manager = getManager();
        return manager.save(usuario);
    }

    async listarTodos(): Promise<UsuarioEntity[]> {
        //const manager = getMongoRepository(UsuarioEntity);
        return await this.manager.find();
    }

    async buscarUsuario(userBuscar: string, passwordBuscar: string): Promise<UsuarioEntity> {
        const manager = getManager();
        return await this.manager.findOne({user: userBuscar, password: passwordBuscar});
    }
}