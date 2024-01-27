const express = require("express");
const router = express.Router();
const {
  getAllPokemons,
  getPokemonById,
  createPokemon,
  updatePokemon,
  deletePokemon,
} = require("../controllers/pokemonControllers");

// GET
router.get("/", getAllPokemons);
router.get("/:id", getPokemonById);

// POST
router.post("/", createPokemon);

// PUT
router.put("/:id", updatePokemon);

// DELETE
router.delete("/:id", deletePokemon);

module.exports = router;
