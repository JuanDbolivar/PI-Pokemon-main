// todo este modulo es para crear un pokemon nuevo, pasarselo a la ruta post
const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    vida: {
      type: DataTypes.STRING,
    },
    ataque: {
      type: DataTypes.STRING,
    },
    defensa: {
      type: DataTypes.STRING,
    },
    velocidad: {
      type: DataTypes.STRING,
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
