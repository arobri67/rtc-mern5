const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN5 Express Server!");
});

module.exports = router;
