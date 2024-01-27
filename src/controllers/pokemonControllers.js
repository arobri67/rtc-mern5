const {
  getAllPokemonsDB,
  getPokemonByIdDB,
  createPokemonDB,
  updatePokemonDB,
  deletePokemonDB,
} = require("../repositories/pokemonFunctions");

// GET
const getAllPokemons = async (req, res) => {
  const pokemons = await getAllPokemonsDB();
  res.status(200).json({ data: pokemons });
};

const getPokemonById = async (req, res) => {
  const { id } = req.params;
  const pokemon = await getPokemonByIdDB(id);
  res.status(200).json({ data: pokemon });
};

// POST
const createPokemon = async (req, res) => {
  const payload = req.body;
  console.log(req.body);
  const newPokemon = await createPokemonDB(payload);
  res.status(201).json({ data: newPokemon });
};

//PUT
const updatePokemon = async (req, res) => {
  const { id } = req.params;
  const { pokedex } = req.body;
  const updatedPokemon = await updatePokemonDB(id, { pokedex });
  res.status(201).json({ data: updatedPokemon });
};

//DELETE
const deletePokemon = async (req, res) => {
  const { id } = req.params;
  deletePokemonDB(id);
  res.status(201).send("Item deleted successfully");
};

module.exports = {
  getAllPokemons,
  getPokemonById,
  createPokemon,
  updatePokemon,
  deletePokemon,
};
