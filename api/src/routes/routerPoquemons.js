const { Router } = require("express");
const getPokemons = require("../controllers/getPokemons");
const getPokemonsById = require("../controllers/getPokemonsById");
const postPokemons = require("../controllers/postPokemons");
const getPokemonsByName = require("../controllers/getPokemonsByName");

const routerPoquemons = Router();

routerPoquemons.get("/", getPokemons);
routerPoquemons.get("/:id", getPokemonsById);
routerPoquemons.post("/pok", getPokemonsByName);
routerPoquemons.post("/", postPokemons);

module.exports = routerPoquemons;
