const axios = require("axios");

const obtenerInformacionPokemon = async (response) => {
  //   console.log(response);
  const pokemonInfoArray = [];

  for (const pokemon of response) {
    try {
      const response = await axios.get(pokemon.url);
      //   const pokemonInfo = response.data;
      pokemonInfoArray.push(response.data);
    } catch (error) {
      console.error(
        `No se pudo obtener información de ${pokemon.name}: ${error.message}`
      );
    }
  }
  const pokemonForId = pokemonInfoArray.map((pok) => {
    const pokHp = pok.stats.filter((stat) => stat.stat.name === "hp");
    const hp = pokHp.map((stat) => stat.base_stat);

    const pokDefen = pok.stats.filter((stat) => stat.stat.name === "defense");
    const def = pokDefen.map((stat) => stat.base_stat);

    const pokAttack = pok.stats.filter((stat) => stat.stat.name === "attack");
    const att = pokAttack.map((stat) => stat.base_stat);

    const pokSpeed = pok.stats.filter((stat) => stat.stat.name === "speed");
    const speed = pokSpeed.map((stat) => stat.base_stat);

    const pokemonForId = {
      id: pok.id,
      nombre: pok.name,
      imagen: "Aca va la imagen",
      vida: hp[0],
      ataque: att[0],
      defensa: def[0],
      velocidad: speed[0],
      altura: pok.height,
      peso: pok.weight,
      //   types: pok.types.map((type) => type.type.name),
    };
    return pokemonForId;
  });
  return pokemonForId;
};

module.exports = { obtenerInformacionPokemon };
