import * as Joi from 'joi';

export const USUARIO_SCHEMA = Joi
    .object()
    .keys({
        user: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        password: Joi
            .string()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .min(8)
            .max(10),
        nombreUsuario: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        apellidoUsuario: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
    });