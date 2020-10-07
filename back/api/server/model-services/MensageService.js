import database from '../models';

class MensageService {
  static async getAllMensages() {
    try {
      const mensages = await database.Mensages.findAll()
      return mensages
    } catch (error) {
      throw error;
    }
  }

  static async addMensage(newMensage) {
    try {

      return await database.Mensages.create(newMensage);
    } catch (error) {
      throw error;
    }
  }


  static async getAMensage(id) {
    try {
      const theMensage = await database.Mensages.findOne({
        where: { id: Number(id) }
      });
      return theMensage;
    } catch (error) {
      throw error;
    }
  }

  static async updateMensage(id, obj) {
    try {
      const MensageToUpdate = await database.Mensages.findOne({
        where: { id: Number(id) }
      });

      if (MensageToUpdate) {
        await database.Mensages.update(obj, { where: { id: Number(id) } });

        return obj;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }


  static async deleteTheme(id) {
    try {
      const MensageToDelete = await database.Mensages.findOne({ where: { id: Number(id) } });

      if (MensageToDelete) {
        const mensagedeleted = await database.Mensages.destroy({
          where: { id: Number(id) }
        });
        return mensagedeleted;
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
export default MensageService;