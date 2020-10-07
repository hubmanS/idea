import { Router } from 'express';
import MensageController from '../model-controllers/MensageController'; //referenci

const router = Router();

//peticiones del usuario a responder por el controlador
router.get('/', MensageController.getAllMensages);
router.post('/', MensageController.addMensage);
router.get('/:id', MensageController.getAMensage);
router.put('/:id', MensageController.updatedMensage);
router.delete('/:id', MensageController.deleteMensage);

export default router; 
