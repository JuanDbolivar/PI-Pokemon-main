const axios = require("axios");

const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (req, res) => {
  try {
    const { data } = await axios(URL);
    const response = data.results;
    res.status(200).json(response);
    if (!response) {
      return res.status(404).json({ error: "verificar url" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemons;
