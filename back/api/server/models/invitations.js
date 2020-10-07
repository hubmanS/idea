module.exports = (sequelize, DataTypes) => {
  const Invitations = sequelize.define('Invitations', {
    Message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
  });
  return Invitations;
};
