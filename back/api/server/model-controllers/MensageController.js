import MensageService from '../model-services/MensageService';
import Util from '../utils/Utils';

const util = new Util();

class MensageController {
  static async getAllMensages(req, res) {
      console.log("hola soy Mensage")
    try {
      const allMensages = await MensageService.getAllMensages();
      if (allMensages.length > 0) {
        util.setSuccess(200, 'Mensages retrieved', allMensages);
      } else {
        util.setSuccess(200, 'No Mensages found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addMensage(req, res) {
    console.log("ADD ", req.body)
    //si la variable mensage esta vacio
    if (!req.body.mensage) {
      
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newMensage = req.body; //objrto json con las entradas del usuario por form
    try {
      const createMensage = await MensageService.addMensage(newMensage);
      util.setSuccess(201, 'Mensage Added!', createMensage);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedMensage(req, res) {
    const alteredMensage = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateMensage = await MensageService.updateMensage(id, alteredMensage);
      if (!updateMensage) {
        util.setError(404, `Cannot find Mensage with the id: ${id}`);
      } else {
        util.setSuccess(200, 'User updated', updateMensage);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAMensage(req, res) {
    console.log('wwwww', req.params)
    const { id } = req.params;//obtengo elnro del usuario a obtener q me manda el user en la ruta
    //sino existe id
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theMensage = await MensageService.getAMensage(id);
//si el usuario no existe si no se pudo obtener de la bd entonces error
      if (!theMensage) {
        util.setError(404, `Cannot find Mensage with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Mensage', theInvitation);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteMensage(req, res) {
    const { id } = req.params;
//si el registro con el nro de id solicitado por el user no existe
    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const MensageToDelete = await MensageService.deleteMensage(id);
      //si existe el ojeto a elimianar
      if (MensageToDelete) {
        util.setSuccess(200, 'Mensage deleted');
      } else {
        util.setError(404, `Mensage with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default MensageController;
