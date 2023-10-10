const { postearPokemons } = require("../handlers/handlerPokemon");

const postPokemons = async (req, res) => {
  try {
    const {
      nombre,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      types,
    } = req.body;

    const pokemon = await postearPokemons({
      nombre: nombre.toLowerCase().trim(),
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      types,
    });
    res.status(201).json(`Pokemon ${pokemon.nombre} creado exitosamente`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPokemons;
