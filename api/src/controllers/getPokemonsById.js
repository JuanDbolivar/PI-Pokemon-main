const axios = require("axios");
const { Pokemon, Type } = require("../db");

const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonsById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}${id}`);

    if (data) {
      const response = [];
      response.push(data);
      const pokemon = response.map((pok) => {
        const pokemon = {
          id: pok.id,
          name: pok.name,
          height: pok.height,
          weight: pok.weight,
          types: pok.types.map((type) => type.type.name),
        };
        return pokemon;
      });
      res.status(200).json(pokemon);
    } else {
      const bdPokemon = await Pokemon.findByPk(id, {
        include: Type,
      });
        // if (!bdPokemon)
        //   return res.status(404).json({ error: "pokemon not found" });
      res.status(200).json(bdPokemon);

    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getPokemonsById;
