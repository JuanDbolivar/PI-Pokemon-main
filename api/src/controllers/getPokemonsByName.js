require("dotenv").config();
const { URL } = process.env;
const { Pokemon, conn } = require("../db");

const axios = require("axios");
const { obtenerInformacionPokemon } = require("../handlers/handlerPokemon");

const getPokemonsByName =  (req, res) => {
  // Importa el modelo Pokemon y la instancia de Sequelize (conn)

  // Define un nuevo Pokémon y guárdalo en la base de datos
  const nuevoPokemon = {
    nombre: "Pikachu",
    imagen: "ruta_de_la_imagen",
    vida: 100,
    ataque: 55,
    defensa: 40,
    velocidad: 90,
    altura: 30,
    peso: 6,
  };

  // Usa el método create de Sequelize para agregar el nuevo Pokémon a la base de datos
  (async () => {
    try {
      const pokemonCreado = await Pokemon.create(nuevoPokemon);
      res.status(201).json(pokemonCreado);
    } catch (error) {
      console.error("Error al crear el Pokémon:", error);
    } finally {
      // Cierra la conexión de Sequelize cuando hayas terminado
      await conn.close();
    }
  })();

  // try {
  //   let pokPromise = [];
  //   const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/`);
  //   pok = data.results;
  //   const urlsId = pok.map((pok) => pok.url);
  //   // console.log("urls =", urlsId);
  //   const promises = urlsId.map((url) => axios.get(url));
  //   Promise.all(promises)
  //     .then((responses) => {
  //       responses.forEach((response) => {
  //         const hp =
  //           response.data.stats.find((stat) => stat.stat.name === "hp")
  //             ?.base_stat || `Este pokemon no tiene ${base_stat}`;

  //         const def =
  //           response.data.stats.find((stat) => stat.stat.name === "defense")
  //             ?.base_stat || `Este pokemon no tiene ${base_stat}`;

  //         const att =
  //           response.data.stats.find((stat) => stat.stat.name === "attack")
  //             ?.base_stat || `Este pokemon no tiene ${base_stat}`;

  //         const speed =
  //           response.data.stats.find((stat) => stat.stat.name === "speed")
  //             ?.base_stat || `Este pokemon no tiene ${base_stat}`;
  //         pokPromise.push({
  //           id: response.data.id,
  //           nombre: response.data.name,
  //           imagen: response.data.sprites.other.dream_world.front_default,
  //           vida: hp,
  //           ataque: att,
  //           defensa: def,
  //           velocidad: speed,
  //           altura: response.data.height,
  //           peso: response.data.weight,
  //           types: response.data.types.map((type) => type.type.name),
  //         });
  //       });
  //     })
  //     .then((response) => res.status(200).json(pokPromise));
  //   //   .then((response) => console.log("FIN"));
  // } catch (error) {
  //   res.status(404).json({ error: error.message });
  // }
};

module.exports = getPokemonsByName;
