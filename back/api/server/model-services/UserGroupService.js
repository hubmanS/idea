import database from '../models';

class UserGroupService {
  //obtener todos los usuarios de un grupo especifico
  static async getAllUsersGroups(idgroup) {
    console.log('11111', idgroup);
    try {
      const usersgroups = await database.User_Groups.findAll({
        where: {
          GroupId: idgroup
        }
      })
      console.log('66666',usersgroups)
      let usersId=[];
      usersgroups.forEach(element => {
       usersId.push(element.UserId) 
      });
      console.log('777777', usersId)
      const users = await database.User.findAll({
        where:{
          id:usersId  //compara el id del user con cada element del arreglo y los iguales los imprime
        }
      })
      console.log('88888', users)
      return users
    } catch (error) {
      throw error;
    }
  }

  static async addUserGroup(newUser, idgroup) {
    console.log('bbbbbbbbbbb', idgroup)
    try {
      //create new user
      const userGroup=await database.User.create(newUser);
      const {id}=userGroup
      console.log('ccccccccccc', id)
      database.User_Groups.create(
        { UserId: id, GroupId: idgroup});
      return await userGroup;

    } catch (error) {
      throw error;
    }
  }
  static async deleteUserGroup(id) {
    console.log('ppppp', id);
    try {
      const userDelete = await database.User.findOne({ 
        where: { id: Number(id) } 
      });
      console.log('wwwww', userDelete);
      if (userDelete) {
        const userdeleted = await database.User.destroy({
          where: { id: Number(id) }
        });
        const userGroupDelete=await database.User_Groups.destroy({
          where: { UserId: Number(id)}
        })
        return userdeleted;
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
export default UserGroupService;