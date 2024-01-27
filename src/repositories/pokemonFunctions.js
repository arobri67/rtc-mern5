const { Pokemon } = require("../models/pokemons");

const getAllPokemonsDB = async () => {
  const pokemons = await Pokemon.find({});
  return pokemons;
};

const getPokemonByIdDB = async (id) => {
  const pokemon = await Pokemon.findById(id);
  return pokemon;
};

const createPokemonDB = async (payload) => {
  const newPokemon = new Pokemon(payload);
  await newPokemon.save();
  return newPokemon;
};

const updatePokemonDB = async (id, payload) => {
  const updatedPokemon = await Pokemon.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updatedPokemon;
};

const deletePokemonDB = async (id) => {
  await Pokemon.findByIdAndDelete(id);
};

module.exports = {
  getAllPokemonsDB,
  getPokemonByIdDB,
  createPokemonDB,
  updatePokemonDB,
  deletePokemonDB,
};
