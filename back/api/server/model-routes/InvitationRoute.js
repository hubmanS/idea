import { Router } from 'express';
import InvitationController from '../model-controllers/InvitationController'; //referenci

const router = Router();

//peticiones del usuario a responder por el controlador
router.get('/', InvitationController.getAllInvitation);
router.post('/', InvitationController.addInvitation);
router.get('/:id', InvitationController.getAInvitation);
router.put('/:id', InvitationController.updatedInvitation);
router.delete('/:id', InvitationController.deleteInvitation);

export default router; 
