const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.static("public"));

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Welcome to my express server! Use /products to get the list of products and /desserts to get the desserts data "
  );
});

app.get("/products", (req, res) => {
  fs.readFile("products.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/desserts", (req, res) => {
  const dessertsPath = path.join(__dirname, "desserts.json");
  fs.readFile(dessertsPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading desserts.json:", err);
      res.status(500).send("Error reading file");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
