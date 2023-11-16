import asyncHandler from "express-async-handler";
import productModel from "../models/productModel.js";

// GET
const getProducts = asyncHandler(async (req, res) => {
  const products = await productModel.find({});
  res.json(products);
});

// GET by Id
const getProductsById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await productModel.findById(productId);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductsById };
