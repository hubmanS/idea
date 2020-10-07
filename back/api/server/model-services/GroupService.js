import database from '../models';

export default class GroupService {
  static async getAllGroups() {
    try {
      const groups = await database.groups.findAll()
      return groups
    } catch (error) {
      throw error;
    }
  }

  static async addGroup(newGroup) {
    try {

      return await database.groups.create(newGroup);
    } catch (error) {
      throw error;
    }
  }

  static async updateGroup(id, obj) {
    try {
      const GroupToUpdate = await database.groups.findOne({
        where: { id: Number(id) }
      });

      if (GroupToUpdate) {
        await database.groups.update(obj, { where: { id: Number(id) } });

        return obj;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAGroup(id) {
    try {
      const theGroup = await database.groups.findOne({
        where: { id: Number(id) }
      });
      return theGroup;
    } catch (error) {
      throw error;
    }
  }

  static async deleteGroup(id) {
    try {
      const groupToDelete = await database.groups.findOne({ where: { id: Number(id) } });

      if (groupToDelete) {
        const groupdeleted = await database.groups.destroy({
          where: { id: Number(id) }
        });
        return groupdeleted;
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
//export default GroupService;