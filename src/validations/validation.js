import { body } from "express-validator";
//title, description, isComplete 
export const validador = [
    body("title")
    .isString().withMessage('el titulo debe completarce alfanumericos')
    .notEmpty().withMessage('el titulo no puede ser vacion')
    .isLength({min:10}).withMessage("el titulo deve ser mayor a 5 caracteres")
];
