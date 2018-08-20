import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';

@Injectable()
export class ItemPipe implements PipeTransform {

    constructor(private readonly _schema) {

    }

    transform(valorItemRequest: any,
              metadata: ArgumentMetadata) {
        const {error} = Joi.validate(
            valorItemRequest,
            this._schema);
        if (error) {
            throw  new PeticionInvalidaException(
                {
                    error: error,
                    mensaje: 'Datos Incorrectos Item',
                },
                10
            )
        }else{
            valorItemRequest;
        }

    }

}