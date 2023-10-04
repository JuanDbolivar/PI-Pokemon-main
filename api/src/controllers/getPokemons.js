const axios = require("axios");
const { obtenerInformacionPokemon } = require("../handlers/handlerPokemon");

const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (req, res) => {
  try {
    const { data } = await axios(URL);
    const response = data.results;
    // console.log("response", response);

    const pokemon = await obtenerInformacionPokemon(response);
    // console.log(pokemon);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemons;
