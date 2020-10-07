import UserService from '../model-services/UserService';
import Util from '../utils/Utils';

const util = new Util();

class UserController {
  static async getAllUsers(req, res) {
    try {
      
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        util.setSuccess(200, 'Users retrieved', allUsers);
      } else {
        util.setSuccess(200, 'No User found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    console.log("ADD ", req.body)
    if (!req.body.name || !req.body.lastName || !req.body.email) {
      
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body; //objrto json con las entradas del usuario por form
    try {
      const createdUser = await UserService.addUser(newUser);
      util.setSuccess(201, 'User Added!', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateUser = await UserService.updateUser(id, alteredUser);
      if (!updateUser) {
        util.setError(404, `Cannot find User with the id: ${id}`);
      } else {
        util.setSuccess(200, 'User updated', updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUser(req, res) {
    console.log('wwwww', req.params)
    const { id } = req.params;//obtengo elnro del usuario a obtener q me manda el user en la ruta

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theUser = await UserService.getAUser(id);
//si el usuario no existe si no se pudo obtener de la bd entonces error
      if (!theUser) {
        util.setError(404, `Cannot find User with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found User', theUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
//si el registro con el nro de id solicitado por el user no existe
    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const UserToDelete = await UserService.deleteUser(id);
      //si existe el ojeto a elimianar
      if (UserToDelete) {
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

export default UserController;