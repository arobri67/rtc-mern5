const { Pokemon } = require("./pokemons");

let pokemons = [
  {
    name: "Charizard",
    type: "Fire/Flying",
    base_experience: 240,
    height: 1.7,
    weight: 90.5,
    abilities: ["Blaze", "Solar Power"],
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      speed: 100,
    },
  },
  {
    name: "Pikachu",
    type: "Electric",
    base_experience: 112,
    height: 0.4,
    weight: 6.0,
    abilities: ["Static", "Lightning Rod"],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      speed: 90,
    },
  },
  {
    name: "Gyarados",
    type: "Water/Flying",
    base_experience: 189,
    height: 6.5,
    weight: 235.0,
    abilities: ["Intimidate", "Moxie"],
    stats: {
      hp: 95,
      attack: 125,
      defense: 79,
      speed: 81,
    },
  },
  {
    name: "Blastoise",
    type: "Water",
    base_experience: 239,
    height: 1.6,
    weight: 85.5,
    abilities: ["Torrent", "Rain Dish"],
    stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      speed: 78,
    },
  },
  {
    name: "Bulbasaur",
    type: "Grass/Poison",
    base_experience: 64,
    height: 0.7,
    weight: 6.9,
    abilities: ["Overgrow", "Chlorophyll"],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
    },
  },
  {
    name: "Zoroark",
    type: "Dark",
    base_experience: 179,
    height: 1.6,
    weight: 81.1,
    abilities: ["Illusion", "Pressure"],
    stats: {
      hp: 60,
      attack: 105,
      defense: 60,
      speed: 105,
    },
  },
  {
    name: "Metagross",
    type: "Steel/Psychic",
    base_experience: 270,
    height: 1.6,
    weight: 550.0,
    abilities: ["Clear Body", "Light Metal"],
    stats: {
      hp: 80,
      attack: 135,
      defense: 130,
      speed: 70,
    },
  },
  {
    name: "Glaceon",
    type: "Ice",
    base_experience: 196,
    height: 0.8,
    weight: 25.9,
    abilities: ["Snow Cloak", "Ice Body"],
    stats: {
      hp: 65,
      attack: 60,
      defense: 110,
      speed: 65,
    },
  },
  {
    name: "Sylveon",
    type: "Fairy",
    base_experience: 184,
    height: 1.0,
    weight: 23.5,
    abilities: ["Cute Charm", "Pixilate"],
    stats: {
      hp: 95,
      attack: 65,
      defense: 65,
      speed: 60,
    },
  },
  {
    name: "Leafeon",
    type: "Grass",
    base_experience: 184,
    height: 1.0,
    weight: 25.5,
    abilities: ["Leaf Guard", "Chlorophyll"],
    stats: {
      hp: 65,
      attack: 110,
      defense: 130,
      speed: 95,
    },
  },
  {
    name: "Umbreon",
    type: "Dark",
    base_experience: 184,
    height: 1.0,
    weight: 27.0,
    abilities: ["Synchronize", "Inner Focus"],
    stats: {
      hp: 95,
      attack: 65,
      defense: 110,
      speed: 65,
    },
  },
];
const clearAndInsertMonData = async () => {
  try {
    await Pokemon.collection.drop();
    await Pokemon.insertMany(pokemons);
    console.log("[***] Pokemon data insert to the DB [***]");
  } catch (err) {
    "Error inserting data", err;
  }
};

module.exports = { clearAndInsertMonData };
