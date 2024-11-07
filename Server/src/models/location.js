const { DataTypes, UUIDV4 } = require("sequelize");
// models/Ubicacion.js
module.exports = (sequelize) => {
  sequelize.define("location", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
