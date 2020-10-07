import { Router } from 'express';
import GroupController from '../model-controllers/GroupController';

const route=Router();

route.get('/', GroupController.getAllGroups);
route.post('/', GroupController.addGroup);
route.get('/:id', GroupController.getAGroup);
route.put('/:id', GroupController.updatedGroup);
route.delete('/:id', GroupController.deleteGroup);

export default route;
