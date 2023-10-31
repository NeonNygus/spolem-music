import express from "express";
import asyncHandler from "express-async-handler";
import productModel from "../models/productModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await productModel.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await productModel.findById(productId);

    if (product) {
      return res.json(product);
    }

    res.status(404).json({ message: "Not found." });
  })
);

router.post(
  "/createProduct",
  asyncHandler(async (req, res) => {
    const newObject = new productModel({
      title: "Rock; Dramatic Moods",
      format: formats[3],
      genre: [genres[1], genres[10]],
      year: 1981,
      country: "UK",
      description: "ROCK!",
      tracklist: [
        {
          trackName: "Whirlwind",
          trackLength: 314,
          trackArtist: "Arik Rodich",
        },
      ],
      label: "Atmosphere Music Library",
      catalogueNum: "ATMOS004",
      coverImage: "/images/1-electronic_music.jpg",
      previewMusic: "/tracks/1-electronic_music.mp3",
      countInStock: 8,
      price: 69,
    });
    await productModel.create(newObject);
  })
);

export default router;
