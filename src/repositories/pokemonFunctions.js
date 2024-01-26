const { Pokemon } = require("../models/pokemons");

const getAllPokemonsDB = async () => {
  const pokemons = await Pokemon.find({});
  return pokemons;
};

module.exports = { getAllPokemonsDB };
