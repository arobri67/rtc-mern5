const express = require("express");
const getAllPokemons = require("../controllers/pokemonControllers");
const router = express.Router();

// GET
router.get("/", getAllPokemons);

module.exports = router;
