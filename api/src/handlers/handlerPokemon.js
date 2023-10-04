const axios = require("axios");

const obtenerInformacionPokemon = async (response) => {
  const pokemonInfo = [];

  for (const pokemon of response) {
    try {
      const response = await axios.get(pokemon.url);
      pokemonInfo.push(response.data);
    } catch (error) {
      console.error(
        `No se pudo obtener información de ${pokemon.name}: ${error.message}`
      );
    }
  }
  const pokemonId = informaciónPokemonById(pokemonInfo);
  return pokemonId;
};

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
