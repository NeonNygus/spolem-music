import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

//data
import users from "./data/users";
import products from "./data/products";

//models
import userModel from "./models/userModel";
import productModel from "./models/productModel";
import orderModel from "./models/orderModel";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await orderModel.deleteMany();
    await productModel.deleteMany();
    await userModel.deleteMany();

    await userModel.insertMany(users);
    await productModel.insertMany(products);
    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await orderModel.deleteMany();
    await productModel.deleteMany();
    await userModel.deleteMany();
    console.log("Data destroyed!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}
