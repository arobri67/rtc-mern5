const express = require("express");
require("./config/db");

const app = express();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`[***] Server listening on http://localhost:${PORT} [***]`);
});
