import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';

@Injectable()
export class UsuarioPipe implements PipeTransform {
    constructor (private readonly _schema){
    }

    transform(valorUsuarioRequest: any,
              metadata: ArgumentMetadata) {
        const {error}= Joi.validate(
            valorUsuarioRequest,
            this._schema);
        if(error) {
            throw  new PeticionInvalidaException(
                {
                    error: error,
                    mensaje: 'Datos Incorrectos Usuario',
                },
                10
            )
        }else{
            valorUsuarioRequest;
        }
    }
}