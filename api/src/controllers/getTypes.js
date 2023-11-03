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
    await Type.bulkCreate(types);

    res.status(200).json({ message: "Info guardada con exito" });
  } catch (error) {
    if (error.message == "Validation error") {
      res.status(500).json({ message: "info guardada" });
    }
    console.log("error", error.message);
  }
};

const getTypesDb = async (req, res) => {
  try {
    const response = await Type.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = { getTypes, getTypesDb };
