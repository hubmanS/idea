module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false,
    underscored: true
  });
  User.associate=function(models){
    User.belongsToMany(models.groups, {
     through: 'User_Group',
     foreignKey:'UserId',
    });
  };
  return User;
};
