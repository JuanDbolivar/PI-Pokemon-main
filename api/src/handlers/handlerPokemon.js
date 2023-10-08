const axios = require("axios");
const { Pokemon, Type } = require("../db");

const obtenerInformacionPokemon = async (response, query) => {
  //* pokemon por query
  if (query) {
    query = query.toLowerCase().trim();
    response = response.filter((res) => res.name === query);
    if (response.length !== 0) {
      const pokemonInfo = [];
      const pokemon = response.map((pok) => pok.url);
      try {
        const queryResponse = await axios.get(pokemon);
        pokemonInfo.push(queryResponse.data);
      } catch (error) {
        console.error(
          `No se pudo obtener información de ${pokemon.name}: ${error.message}`
        );
      }
      const pokemonId = informaciónPokemonById(pokemonInfo);
      return pokemonId;
    } else {
      const pokemonId = await Pokemon.findOne({ where: { nombre: query } });
      return pokemonId;
    }
  }

  //* pokemones completos
  //pokemonList=response
  try {
    const promises = response.map((pok) => axios.get(pok.url));

    const responses = await Promise.all(promises);
    const pokPromise = responses.map((pokemon) => pokemon.data);
    const pokemonId = informaciónPokemonById(pokPromise);
    return pokemonId;
  } catch (error) {
    throw error;
  }
};

//*************************************************************** */

//* organizando info
const informaciónPokemonById = (pokemons) => {
  const pokemonId = pokemons.map((pok) => {
    const hp =
      pok.stats.find((stat) => stat.stat.name === "hp")?.base_stat ||
      `Este pokemon no cuenta con vida`;

    const def =
      pok.stats.find((stat) => stat.stat.name === "defense")?.base_stat ||
      `Este pokemon no cuenta con defensa`;

    const att =
      pok.stats.find((stat) => stat.stat.name === "attack")?.base_stat ||
      `Este pokemon no cuenta con ataque`;

    const speed =
      pok.stats.find((stat) => stat.stat.name === "speed")?.base_stat ||
      `Este pokemon no cuenta con velocidad`;

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

//*************************************************************** */

//* posteo de pokemons
const postearPokemons = async ({
  nombre,
  imagen,
  vida,
  ataque,
  defensa,
  velocidad,
  altura,
  peso,
  types,
}) => {
  const pokemon = {
    nombre,
    imagen,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    types,
  };
  const newPokemon = await Pokemon.create(pokemon);
  newPokemon.addType(types);
  return newPokemon;
};

module.exports = {
  obtenerInformacionPokemon,
  informaciónPokemonById,
  postearPokemons,
};
