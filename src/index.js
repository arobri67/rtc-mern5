const express = require("express");
const { clearAndInsertMonData } = require("./models/pokemon-data");
require("./config/db");
const pokemonRouter = require("./routes/pokemonRoutes");
const baseRouter = require("./routes/baseRoutes");

const app = express();

clearAndInsertMonData();

app.use("/pokemon", pokemonRouter);
app.use("/", baseRouter);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`[***] Server listening on http://localhost:${PORT} [***]`);
});
