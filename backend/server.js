import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
const port = 5000;

const app = express();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p._id === productId);
  res.json(product);
});

app.listen(port, () => console.log("Server is runnin"));
