const mongoose = require("mongoose");
const pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  base_experience: Number,
  height: Number,
  weight: Number,
  abilities: [String],
  stats: {
    hp: Number,
    attack: Number,
    defense: Number,
    speed: Number,
  },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = { Pokemon };
