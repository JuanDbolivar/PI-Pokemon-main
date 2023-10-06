const { Router } = require("express");
const routerPokemons = require("./routerPokemons");
const routerTypes = require("./routerTypes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
router.use("/poquemons", routerPokemons);
router.use("/types", routerTypes);
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
