require("dotenv").config();
const { URL_TYPES } = process.env;

const axios = require("axios");
const { obtenerTypes } = require("../handlers/handlerTypes");
const { Type } = require("../db");

const getTypes = async (req, res) => {
  try {
    const { data } = await axios(URL_TYPES);
    const response = data.results;
    const types = await obtenerTypes(response);
    const typeBd = await Type.bulkCreate(types);

    res.status(200).json({ message: "Info guardada con exito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTypesDb = async (req,res) => {
  try {
    const response = await Type.findAll();
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { getTypes, getTypesDb };
