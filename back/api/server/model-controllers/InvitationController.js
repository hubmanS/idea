import InvitationService from '../model-services/InvitationService';
import Util from '../utils/Utils';

const util = new Util();

class InvitationController {
  static async getAllInvitation(req, res) {
      console.log("hola soy CInvitation")
    try {
      const allInvitations = await InvitationService.getAllInvitations();
      if (allInvitations.length > 0) {
        util.setSuccess(200, 'Invitations retrieved', allInvitations);
      } else {
        util.setSuccess(200, 'No Invitations found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addInvitation(req, res) {
    console.log("ADD ", req.body)
    if (!req.body.Message) {
      
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newInvitation = req.body; //objrto json con las entradas del usuario por form
    try {
      const createInvitation = await InvitationService.addInvitation(newInvitation);
      util.setSuccess(201, 'User Added!', createInvitation);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedInvitation(req, res) {
    const alteredInvitation = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateInvitation = await InvitationService.updateInvitation(id, alteredInvitation);
      if (!updateInvitation) {
        util.setError(404, `Cannot find User with the id: ${id}`);
      } else {
        util.setSuccess(200, 'User updated', updateInvitation);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAInvitation(req, res) {
    console.log('wwwww', req.params)
    const { id } = req.params;//obtengo elnro del usuario a obtener q me manda el user en la ruta
    //sino existe id
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theInvitation = await InvitationService.getAInvitation(id);
//si el usuario no existe si no se pudo obtener de la bd entonces error
      if (!theInvitation) {
        util.setError(404, `Cannot find invitation with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Invitation', theInvitation);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteInvitation(req, res) {
    const { id } = req.params;
//si el registro con el nro de id solicitado por el user no existe
    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const InvitationToDelete = await InvitationService.deleteInvitation(id);
      //si existe el ojeto a elimianar
      if (InvitationToDelete) {
        util.setSuccess(200, 'Invitation deleted');
      } else {
        util.setError(404, `Invitation with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default InvitationController;
