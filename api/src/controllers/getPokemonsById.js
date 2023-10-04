const axios = require("axios");
const { informaciónPokemonById } = require("../handlers/handlerPokemon");
const { Pokemon, Type } = require("../db");

const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonsById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}${id}`);

    if (data) {
      const response = [];
      response.push(data);
      // console.log(response);
      const pokemon = await informaciónPokemonById(response);

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
