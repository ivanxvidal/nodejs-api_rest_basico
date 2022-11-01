const { Router } = require("express");
const router = Router();

// Feact 2.6.7
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  res.json(users);
});

module.exports = router;
