import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioController} from "./usuario/usuario.controller";
import {UsuarioService} from "./usuario/usuario.service";
import {ItemController} from "./item/item.controller";
import {ItemService} from "./item/item.service";
import {ItemEntity} from "./item/item.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'bandres-jar.mysql.database.azure.com',
          port: 3306,
          username: 'brix@bandres-jar',
          password: 'AzureBDD5.',
          database: 'proyectofin',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: false,
          ssl :true,
      }),
      TypeOrmModule.forFeature([UsuarioEntity, ItemEntity])
  ],
  controllers: [AppController, UsuarioController, ItemController],
  providers: [AppService, UsuarioService, ItemService],
})
export class AppModule {}
