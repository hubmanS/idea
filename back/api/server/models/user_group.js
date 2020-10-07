module.exports = (sequelize, DataTypes) => {
  const User_Groups = sequelize.define('User_Groups', {
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GroupId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false,
    underscored: true
  },);
  return User_Groups;
};
