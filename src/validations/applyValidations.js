import { validationResult } from "express-validator";

export const applyValidation = (req,res,next)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json(error);
    } else {
        next()
    }
}