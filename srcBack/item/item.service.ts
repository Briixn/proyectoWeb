import {Injectable} from "@nestjs/common";
import {ItemEntity} from "./item.entity";
import {Equal, getManager, getMongoRepository, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Injectable()
export class ItemService {


    constructor(@InjectRepository(ItemEntity)
                private readonly  manager: Repository<ItemEntity>) {
    }

    crearItem(item: ItemEntity) {
        const manager = getManager();
        return manager.save(item);
    }

    async listarTodos(element: string): Promise<ItemEntity[]> {
       // const manager = getMongoRepository(ItemEntity);
        return await this.manager.find({elemento: element});
    }
}