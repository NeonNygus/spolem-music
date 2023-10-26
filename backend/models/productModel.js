import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  productReviews: [reviewModel],
  countInStock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const reviewModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  reviewRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  reviewComment: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
