import { Router } from 'express';
import ThemeController from '../model-controllers/ThemeController'; //referenci

const router = Router();

//peticiones del usuario a responder por el controlador
router.get('/', ThemeController.getAllThemes);
router.post('/', ThemeController.addThemes);
router.get('/:id', ThemeController.getATheme);
router.put('/:id', ThemeController.updatedTheme);
router.delete('/:id', ThemeController.deleteTheme);

export default router; 
