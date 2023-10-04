const axios = require("axios");

const URL = "https://pokeapi.co/api/v2/pokemon/";

const handlerPokemon =async (query)=>{
    try {
        const { data } = await axios(URL);
        // const pokemon
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
} 
  

module.exports = handlerPokemon;