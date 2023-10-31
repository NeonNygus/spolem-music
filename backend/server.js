import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./../backend/routes/productRoutes.js";

const port = 5000;

connectDB();

const app = express();

app.use("/api/products", productRoutes);

app.listen(port, () => console.log("Server is runnin"));
