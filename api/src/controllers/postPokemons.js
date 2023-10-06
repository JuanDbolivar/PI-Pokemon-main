const { postearPokemons } = require("../handlers/handlerPokemon");

const postPokemons = async (req, res) => {
  //   res.send("ruta post");
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
      nombre,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      types,
    });
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPokemons;
