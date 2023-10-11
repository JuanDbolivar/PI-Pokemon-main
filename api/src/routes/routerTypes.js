const { Router } = require("express");
const { getTypes, getTypesDb } = require("../controllers/getTypes");

const routerTypes = Router();

routerTypes.get("/", getTypes);
routerTypes.get("/db", getTypesDb);

module.exports = routerTypes;
