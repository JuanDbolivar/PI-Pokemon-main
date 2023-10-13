require("dotenv").config();
const { URL } = process.env;
const { URL_ID } = process.env;

const axios = require("axios");
const { obtenerInformacionPokemon } = require("../handlers/handlerPokemon");
const { pokemonDb } = require("../handlers/handlerPokemon");

const getPokemons = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      let nameok = name.toLowerCase().trim();
      try {
        const { data } = await axios(`${URL_ID}${nameok}`);
        const response = data;
        const pokemon = await obtenerInformacionPokemon(response, name);
        res.status(200).json(pokemon);
      } catch (axiosError) {
        if (axiosError) {
          try {
            const pokemoFound = [];
            pokemoFound.push(await pokemonDb(nameok));
            if (pokemoFound) {
              res.status(200).json(pokemoFound);
            } else {
              throw new Error("Este pokemon no existe o no ha sido creado");
            }
          } catch (error) {
            throw error;
          }
        }
      }
    } else {
      const { data } = await axios(URL);
      const next = data.next;
      const response = data.results;
      const pokemon = await obtenerInformacionPokemon(response);
      res.status(200).json(pokemon);
    }
  } catch (error) {
    res
      .status(404)
      .json({ error: "Este pokemon no existe o no ha sido creado" });
  }
};

module.exports = getPokemons;
