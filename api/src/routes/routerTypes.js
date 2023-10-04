const { Router } = require("express");
const getTypes = require("../controllers/getTypes");

const routerTypes = Router();

routerTypes.get("/", getTypes);

module.exports = routerTypes;
