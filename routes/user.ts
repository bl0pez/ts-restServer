import { Router } from "express";
import { getUser, getUsers, postUser, putUser, deleteUser } from '../controllers/users';
import { validateUser } from '../validators/userValidations';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', validateUser, postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);


export default router;