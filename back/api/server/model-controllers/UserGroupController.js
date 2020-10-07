import UGService from '../model-services/UserGroupService';
import Util from '../utils/Utils';
import UserGroupService from '../model-services/UserGroupService';

const util = new Util();

class UserGroupController {
  //obtener todos los usuarios de un grupo especifico con id x
  static async getAllUsersGroups(req, res) {
    try {
      const {id}=req.params;
      console.log('33333', id)
      const allUG = await UGService.getAllUsersGroups(id);
     
      if (allUG.length > 0) {
        util.setSuccess(200, 'Users retrieved', allUG);
      } else {
        util.setSuccess(200, 'No User found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUserGroup(req, res) {
    const {id}=req.params;
    console.log("aaaaaaaaaaa ", id)
    if (!req.body.name || !req.body.lastName || !req.body.email) {
      
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body; //objrto json con las entradas del usuario por form
    try {
      const createdUser = await UserGroupService.addUserGroup(newUser, id);
      util.setSuccess(201, 'User Added!', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
/*
  static async getAUserGroup(req, res) {
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

  static async updatedUserGroup(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theUser = await UserService.getAUser(id);

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
*/
//eliminar un usuario de un grupos especifico con id x
  static async deleteUserGroup(req, res) {
    const { id } = req.params;
   console.log('gggggg', id)
    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const UserGroupDelete = await UserGroupService.deleteUserGroup(id);

      if (UserGroupDelete) {
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

export default UserGroupController;