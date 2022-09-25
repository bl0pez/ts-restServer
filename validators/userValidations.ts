import { check } from "express-validator";
import validations from '../helpers/validations';
import emailExist from "../Middleware/emailExist";

export const validateUser = [
    check('name').trim().not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Email is not valid'),
    validations,
    emailExist
];