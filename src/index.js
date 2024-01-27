const express = require("express");
const { clearAndInsertMonData } = require("./models/pokemon-data");
require("./config/db");
const pokemonRouter = require("./routes/pokemonRoutes");
const baseRouter = require("./routes/baseRoutes");

const app = express();

app.use(express.json());

clearAndInsertMonData();

app.use("/pokemon", pokemonRouter);
app.use("/", baseRouter);

//GENERAL error handeling
app.use("*", (req, res) => {
  res.status(404).send("Error 404, wrong URL request");
});
app.use((error, req, res, next) => {
  res.status(500).send("500 Internal server error");
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`[***] Server listening on http://localhost:${PORT} [***]`);
});
