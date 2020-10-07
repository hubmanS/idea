import GroupService from '../model-services/GroupService';
import Util from '../utils/Utils';

const util = new Util();

class GroupController {
  static async getAllGroups(req, res) {
    try {
      
      const allGroups = await GroupService.getAllGroups();
     
      if (allGroups.length > 0) {
        util.setSuccess(200, 'Groups retrieved(recuperada)', allGroups);
      } else {
        util.setSuccess(200, 'No Groups found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addGroup(req, res) {
    console.log('llegue aqui');
    console.log("ADD ", req.body)
    if (!req.body.group_name || !req.body.status) {
      console.log(req.body.group_name);
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newGroup = req.body;
    try {
      const createdGroup = await GroupService.addGroup(newGroup);
      util.setSuccess(201, 'Group Added!', createdGroup);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedGroup(req, res) {
    const alteredGroup = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateGroup = await GroupService.updateGroup(id, alteredGroup);
      if (!updateGroup) {
        util.setError(404, `Cannot find Group with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Group updated', updateGroup);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAGroup(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theGroup = await GroupService.getAGroup(id);

      if (!theGroup) {
        util.setError(404, `Cannot find Group with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Group', theGroup);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteGroup(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const GroupToDelete = await GroupService.deleteGroup(id);

      if (GroupToDelete) {
        util.setSuccess(200, 'Group deleted');
      } else {
        util.setError(404, `Group with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}
export default GroupController;