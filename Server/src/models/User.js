const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4, // Cambiado a UUIDV4 para generar un UUID automáticamente
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ci: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    geolocation: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
  });
};
