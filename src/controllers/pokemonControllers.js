const { getAllPokemonsDB } = require("../repositories/pokemonFunctions");

//GET
const getAllPokemons = async (req, res) => {
  const pokemons = await getAllPokemonsDB();
  res.status(200).json({ data: pokemons });
};

module.exports = getAllPokemons;
