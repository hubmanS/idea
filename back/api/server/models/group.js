module.exports = (sequelize, DataTypes) => {
  const groups = sequelize.define('groups', {
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false,
    underscored: true
  });
  groups.associate=function(models){
    groups.belongsToMany(models.User, {
      through: 'User_Group',
      foreignKey: 'GroupId',
    });
  };
  return groups;
};