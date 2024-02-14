const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  productType: {
    type: String,
    required: true,
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
  primaryImage: {
    type: String,
    //required: true,
  },
  hoverImage: {
    type: String,
  },
});

const Product = model("product", productSchema);

module.exports = Product;
