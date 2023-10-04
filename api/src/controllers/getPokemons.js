require("dotenv").config();
const { URL } = process.env;

const axios = require("axios");
const { obtenerInformacionPokemon } = require("../handlers/handlerPokemon");

const getPokemons = async (req, res) => {
  try {
    const { data } = await axios(URL);
    const response = data.results;
    const pokemon = await obtenerInformacionPokemon(response);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemons;
