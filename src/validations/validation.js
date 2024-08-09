import { body } from "express-validator";
//title, description, isComplete 
export const validador = [
    body("title")
    .isString().withMessage('el campo debe contener solo numeros')
    .isEmpty().withMessage('el titulo no puede ser vacion')
];
