require("dotenv").config();
const { URL_ID } = process.env;

const axios = require("axios");
const { informaciónPokemonById } = require("../handlers/handlerPokemon");
const { Pokemon, Type } = require("../db");

const getPokemonsById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios(`${URL_ID}${id}`);
    const response = [];
    response.push(data);
    const pokemon = await informaciónPokemonById(response);

    res.status(200).json(pokemon);
  } catch (apiError) {
    try {
      const localPokemon = await Pokemon.findByPk(id, {
        include: {
          model: Type,
          attributes: ["nombre"],
          through: {
            attributes: [],
          },
        },
      });

      if (localPokemon) {
        const pokemon = { ...localPokemon };
        if (pokemon.dataValues.Types) {
          pokemon.dataValues.types = pokemon.dataValues.Types.map(
            (tipo) => tipo.nombre
          );
          delete pokemon.dataValues.Types;
          const pokeDb = [];
          pokeDb.push(pokemon.dataValues);
          res.status(200).json(pokeDb);
        } else {
          throw new Error("Pokémon no encontrado");
        }
      }
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

module.exports = getPokemonsById;
