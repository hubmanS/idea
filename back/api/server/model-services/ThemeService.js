import database from '../models';

class ThemeService {
  static async getAllThemes() {
    try {
      const themes = await database.Themes.findAll()
      return themes
    } catch (error) {
      throw error;
    }
  }

  static async addTheme(newTheme) {
    try {

      return await database.Themes.create(newTheme);
    } catch (error) {
      throw error;
    }
  }


  static async getATheme(id) {
    try {
      const theTheme = await database.Themes.findOne({
        where: { id: Number(id) }
      });
      return theTheme;
    } catch (error) {
      throw error;
    }
  }

  static async updateTheme(id, obj) {
    try {
      const ThemeToUpdate = await database.Themes.findOne({
        where: { id: Number(id) }
      });

      if (ThemeToUpdate) {
        await database.Themes.update(obj, { where: { id: Number(id) } });

        return obj;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }


  static async deleteTheme(id) {
    try {
      const themeToDelete = await database.Themes.findOne({ where: { id: Number(id) } });

      if (themeToDelete) {
        const themedeleted = await database.Themes.destroy({
          where: { id: Number(id) }
        });
        return themedeleted;
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
export default ThemeService;