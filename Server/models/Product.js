const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  type: {
    type: String,
    required: "You need to leave a thought!",
  },
  scent: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Product = model("product", productSchema);

module.exports = Product;
