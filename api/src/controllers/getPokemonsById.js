require("dotenv").config();
const { URL } = process.env;

const axios = require("axios");
const { informaciónPokemonById } = require("../handlers/handlerPokemon");
const { Pokemon, Type } = require("../db");

const getPokemonsById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios(`${URL}${id}`);
    const response = [];
    response.push(data);
    const pokemon = await informaciónPokemonById(response);

    res.status(200).json(pokemon);
  } catch (apiError) {
    try {
      const localPokemon = await Pokemon.findByPk(id, {
        include: Type,
      });

      if (localPokemon) {
        const pokemon = [];
        pokemon.push(localPokemon);

        res.status(200).json(pokemon);
      } else {
        throw new Error("Pokémon no encontrado");
      }
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

module.exports = getPokemonsById;
