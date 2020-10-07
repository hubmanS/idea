import database from '../models';

class InvitationService {
  static async getAllInvitations() {
      console.log("hi i am service")
    try {
      const invitations = await database.Invitations.findAll()
      console.log('invitation', invitations)
      return invitations
    } catch (error) {
      throw error;
    }
  }

  static async addInvitation(newInvitation) {
    try {

      return await database.Invitations.create(newInvitation);
    } catch (error) {
      throw error;
    }
  }
  static async updateInvitation(id, obj) {
    try {
      const InvitationToUpdate = await database.Invitations.findOne({
        where: { id: Number(id) }
      });

      if (InvitationToUpdate) {
        await database.Invitations.update(obj, { where: { id: Number(id) } });

        return obj;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAInvitation(id) {
    try {
      const theInvitation = await database.Invitations.findOne({
        where: { id: Number(id) }
      });
      return theInvitation;
    } catch (error) {
      throw error;
    }
  }

  static async deleteInvitation(id) {
    try {
      const invitationToDelete = await database.Invitations.findOne({ where: { id: Number(id) } });

      if (invitationToDelete) {
        const invitationdeleted = await database.Invitations.destroy({
          where: { id: Number(id) }
        });
        return invitationdeleted;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
/**la ultima linea de codigo quiere decir que este archivo se comvertio en 
 * modulo para poder ser usado desde cualquier otro archivo con solamente
 * importarlo en ella con el uso del import x from ruta, cabe destacar que
 * este modulo se llamara como UserService y debe usarce con ese nombre
 * desde otro archivo.
 */

 //EXPORTAMOS PARA TENER ACCESO A ESTE FILE DESDE OTRO
export default InvitationService;
