const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Ticket",
    {
      id: {
        type: DataTypes.INTEGER, //
        autoIncrement: true,
        allowNull: false, //no quiero que este campo este vacio
        primaryKey: true,
      },
      título: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripción: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
