const { Router } = require("express");
const getPokemons = require("../controllers/getPokemons");
const getPokemonsById = require("../controllers/getPokemonsById");
const postPokemons = require("../controllers/postPokemons");
const pokdb = require("../controllers/pokdb");

const routerPokemons = Router();

routerPokemons.get("/", getPokemons);
routerPokemons.get("/db", pokdb);
routerPokemons.get("/:id", getPokemonsById);
routerPokemons.post("/", postPokemons);

module.exports = routerPokemons;
