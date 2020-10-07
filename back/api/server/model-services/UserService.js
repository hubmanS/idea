import database from '../models';

class UserService {
  static async getAllUsers() {
    try {
      const users = await database.User.findAll()
      return users
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {

      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, obj) {
    try {
      const UserToUpdate = await database.User.findOne({
        where: { id: Number(id) }
      });

      if (UserToUpdate) {
        await database.User.update(obj, { where: { id: Number(id) } });

        return obj;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUser(id) {
    try {
      const theUser = await database.User.findOne({
        where: { id: Number(id) }
      });
      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await database.User.findOne({ where: { id: Number(id) } });

      if (userToDelete) {
        const userdeleted = await database.User.destroy({
          where: { id: Number(id) }
        });
        return userdeleted;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;