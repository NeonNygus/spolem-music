import mongoose from "mongoose";

const paymentMethods = {
  1: "Przelew bankowy",
  2: "PayPal",
  3: "ApplePay",
  4: "GooglePay",
};

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  orderItems: [
    {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  shippingAddress: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },

  totalPrice: {
    type: String,
    required: true,
    default: 0.0,
  },
  paymentMethod: {
    type: String,
    enum: paymentMethods,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
    required: true,
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },
  deliveredAt: {
    type: Date,
  },
});

const orderModel = mongoose.Model("Order", orderSchema);

export default orderModel;
