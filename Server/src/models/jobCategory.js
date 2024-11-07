const { DataTypes, UUID } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("JobCategory", {
    categoryId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
