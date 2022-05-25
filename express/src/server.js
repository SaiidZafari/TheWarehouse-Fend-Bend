const express = require("express");

const app = express();

const cors = require("cors");

const products = require("./Data/products.json");

const inventory = require("./Data/inventory.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express Server is running now!");
});

app.get("/api/products", (req, res) => {
  if (!products) res.status(404).send("There is No data in Database.");
  res.send(products);
});

app.get("/api/inventory", (req, res) => {
  if (!inventory) res.status(404).send("There is No data in Database.");
  res.send(inventory);
});


const port = process.env.port || 3001;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
