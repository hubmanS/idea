import ThemeService from '../model-services/ThemeService';
import Util from '../utils/Utils';

const util = new Util();

class ThemeController {
  static async getAllThemes(req, res) {
    try {
      
      const allThemes = await ThemeService.getAllThemes();
      if (allThemes.length > 0) {
        util.setSuccess(200, 'Themes retrieved', allThemes);
      } else {
        util.setSuccess(200, 'No Theme found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addThemes(req, res) {
    console.log("ADD ", req.body)
    //sino existe title ni type(osea si estan vacios estas variables)
    if (!req.body.title || !req.body.type) {
      console.log('title', req.body.title)
      console.log('type', req.body.type)
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newTheme = req.body; //objrto json con las entradas del usuario por form
    try {
      const createdTheme = await ThemeService.addTheme(newTheme);
      util.setSuccess(201, 'User Added!', createdTheme);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  
  static async getATheme(req, res) {
    console.log('wwwww', req.params)
    const { id } = req.params;//obtengo elnro del usuario a obtener q me manda el user en la ruta

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theTheme = await ThemeService.getATheme(id);
//si el usuario no existe si no se pudo obtener de la bd entonces error
      if (!theTheme) {
        util.setError(404, `Cannot find User with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Theme', theTheme);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async updatedTheme(req, res) {
    const alteredTheme = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateTheme = await ThemeService.updateTheme(id, alteredTheme);
      if (!updateTheme) {
        util.setError(404, `Cannot find Theme with the id: ${id}`);
      } else {
        util.setSuccess(200, 'User updated', updateTheme);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  
  static async deleteTheme(req, res) {
    const { id } = req.params;
//si el registro con el nro de id solicitado por el user no existe
    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const ThemeToDelete = await ThemeService.deleteTheme(id);
      //si existe el ojeto a elimianar
      if (ThemeToDelete) {
        util.setSuccess(200, 'User deleted');
      } else {
        util.setError(404, `User with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default ThemeController;