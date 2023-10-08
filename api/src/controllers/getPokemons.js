require("dotenv").config();
const { URL } = process.env;
const { URL_ID } = process.env;

const axios = require("axios");
const { obtenerInformacionPokemon } = require("../handlers/handlerPokemon");

const getPokemons = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      let nameok = name.toLowerCase().trim();
      const { data } = await axios(`${URL_ID}${nameok}`);
      const response = data;
      const pokemon = await obtenerInformacionPokemon(response, name);
      res.status(200).json(pokemon);
    } else {
      const { data } = await axios(URL_ID);
      const next = data.next;
      const response = data.results;
      console.log("next", next);
      const pokemon = await obtenerInformacionPokemon(response);
      res.status(200).json(pokemon);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemons;
