// todo este modulo es para crear un pokemon nuevo, pasarselo a la ruta post
const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vida: {
        type: DataTypes.INTEGER,
      },
      ataque: {
        type: DataTypes.INTEGER,
      },
      defensa: {
        type: DataTypes.INTEGER,
      },
      velocidad: {
        type: DataTypes.INTEGER,
      },
      altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      types: {
        type: DataTypes.ARRAY(DataTypes.STRING), 
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
