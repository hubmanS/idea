import { Router } from 'express';
import UserController from '../model-controllers/UserController'; //referenci

const router = Router();

//peticiones del usuario a responder por el controlador
router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);
router.get('/:id', UserController.getAUser);
router.put('/:id', UserController.updatedUser);
router.delete('/:id', UserController.deleteUser);

export default router; 
