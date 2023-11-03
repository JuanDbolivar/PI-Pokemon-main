const { Pokemon, Type } = require("../db");

const pokdb = async (req, res) => {
  try {
    const response = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["nombre"],
        through: {
          attributes: []
        },
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = pokdb;
