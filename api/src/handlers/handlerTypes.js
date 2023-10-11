const axios = require("axios");

const obtenerTypes = async (response) => {
  try {
    const urlsId = response.map((pok) => pok.url);
    const promises = urlsId.map((url) => axios.get(url));
    const responses = await Promise.all(promises);

    const pokPromise = responses.map((pokemon) => {
      const type = { id: pokemon.data.id, nombre: pokemon.data.name };
      return type;
    });
    return pokPromise;
  } catch (error) {
    throw error.message;
  }
};

module.exports = { obtenerTypes };
