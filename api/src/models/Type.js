const { DataTypes } = require("sequelize");

module.exports = (sequelize) => { 
  sequelize.define("type", { // es un array llamado types
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
