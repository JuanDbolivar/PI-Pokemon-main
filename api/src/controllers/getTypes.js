const axios = require("axios");

const URL = "https://pokeapi.co/api/v2/type";

const getTypes = async (req, res) => {
  try {
    const { data } = await axios(URL);
    const response=data.results
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTypes;
