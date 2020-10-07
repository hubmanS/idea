import { Router } from 'express';
import UGController from '../model-controllers/UserGroupController';
import route from './GroupRoute';

const router = Router();

router.get('/:id', UGController.getAllUsersGroups);
router.post('/:id', UGController.addUserGroup);
router.delete('/:id', UGController.deleteUserGroup);
/*router.get('/:id', UGController.getAUserGroup);
router.put('/:id', UGController.updatedUserGroup);
router.delete('/:id', UGController.deleteUserGroup);*/

export default router; 
