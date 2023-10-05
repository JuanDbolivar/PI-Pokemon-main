const axios = require("axios");

const obtenerInformacionPokemon = async (response, query) => {
  //* pokemon por query
  if (query) {
    query = query.toLowerCase().trim();
    response = response.filter((res) => res.name == query);
    if (response.length !== 0) {
      const pokemonInfo = [];
      const pokemon = response.map((pok) => pok.url);
      try {
        const responses = await axios.get(pokemon);
        pokemonInfo.push(responses.data);
      } catch (error) {
        console.error(
          `No se pudo obtener información de ${pokemon.name}: ${error.message}`
        );
      }
      const pokemonId = informaciónPokemonById(pokemonInfo);
      return pokemonId;
    } else {
    }
  }
  //* pokemones completos
  try {
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/`);
    const pok = data.results;
    const urlsId = pok.map((pok) => pok.url);

    const promises = urlsId.map((url) => axios.get(url));
    const responses = await Promise.all(promises);

    const pokPromise = responses.map((response) => response.data);

    const pokemonId = informaciónPokemonById(pokPromise);

    return pokemonId;
  } catch (error) {
    console.error("Error al obtener información del Pokémon:", error.message);
    throw error;
  }

  //   const pokemonId = [];

  //   let pokPromise = [];
  //   const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/`);
  //   pok = data.results;
  //   const urlsId = pok.map((pok) => pok.url);
  //   console.log("urls =", urlsId);
  //   const promises = urlsId.map((url) => axios.get(url));
  //   Promise.all(promises)
  //     .then((responses) => {
  //       responses.forEach((response) => {
  //         pokPromise.push(response.data);
  //       });
  //     })
  //     .then((response) => {
  //       pokemonId = informaciónPokemonById(pokPromise);
  //     })
  //     //   .then((response) => console.log("pokemons", pokemonId))
  //     .then((response) => {
  //       return pokemonId;
  //     });
  //     // return pokemonId;
  //   console.log(pokemonId);

  //   for (const pokemon of response) {
  //     try {
  //       const response = await axios.get(pokemon.url);
  //       pokemonInfo.push(response.data);
  //     } catch (error) {
  //       console.error(
  //         `No se pudo obtener información de ${pokemon.name}: ${error.message}`
  //       );
  //     }
  //   }

  //   return pokemonId
};

//*************************************************************** */

const informaciónPokemonById = (response) => {
  const pokemonId = response.map((pok) => {
    const hp =
      pok.stats.find((stat) => stat.stat.name === "hp")?.base_stat ||
      `Este pokemon no tiene ${base_stat}`;

    const def =
      pok.stats.find((stat) => stat.stat.name === "defense")?.base_stat ||
      `Este pokemon no tiene ${base_stat}`;

    const att =
      pok.stats.find((stat) => stat.stat.name === "attack")?.base_stat ||
      `Este pokemon no tiene ${base_stat}`;

    const speed =
      pok.stats.find((stat) => stat.stat.name === "speed")?.base_stat ||
      `Este pokemon no tiene ${base_stat}`;

    const pokemonId = {
      id: pok.id,
      nombre: pok.name,
      imagen: pok.sprites.other.dream_world.front_default,
      vida: hp,
      ataque: att,
      defensa: def,
      velocidad: speed,
      altura: pok.height,
      peso: pok.weight,
      types: pok.types.map((type) => type.type.name),
    };
    return pokemonId;
  });
  return pokemonId;
};

module.exports = { obtenerInformacionPokemon, informaciónPokemonById };
