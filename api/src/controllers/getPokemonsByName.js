require("dotenv").config();
const { URL } = process.env;

const axios = require("axios");
const { obtenerInformacionPokemon } = require("../handlers/handlerPokemon");

const getPokemonsByName = async (req, res) => {
  try {
    let pokPromise = [];
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/`);
    pok = data.results;
    const urlsId = pok.map((pok) => pok.url);
    // console.log("urls =", urlsId);
    const promises = urlsId.map((url) => axios.get(url));
    Promise.all(promises)
      .then((responses) => {
        responses.forEach((response) => {
          const hp =
            response.data.stats.find((stat) => stat.stat.name === "hp")
              ?.base_stat || `Este pokemon no tiene ${base_stat}`;

          const def =
            response.data.stats.find((stat) => stat.stat.name === "defense")
              ?.base_stat || `Este pokemon no tiene ${base_stat}`;

          const att =
            response.data.stats.find((stat) => stat.stat.name === "attack")
              ?.base_stat || `Este pokemon no tiene ${base_stat}`;

          const speed =
            response.data.stats.find((stat) => stat.stat.name === "speed")
              ?.base_stat || `Este pokemon no tiene ${base_stat}`;
          pokPromise.push({
            id: response.data.id,
            nombre: response.data.name,
            imagen: response.data.sprites.other.dream_world.front_default,
            vida: hp,
            ataque: att,
            defensa: def,
            velocidad: speed,
            altura: response.data.height,
            peso: response.data.weight,
            types: response.data.types.map((type) => type.type.name),
          });
        });
      })
      .then((response) => res.status(200).json(pokPromise));
    //   .then((response) => console.log("FIN"));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

};

module.exports = getPokemonsByName;
