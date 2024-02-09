const db = require("../config/connection");
const { User, Product } = require("../models");
const productSeeds = require("./productSeeds.json");
const userSeeds = require("./userSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Product", "products");
    await cleanDB("User", "users");

    await User.create(userSeeds);

    await Product.create(productSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("SEEDING COMPLETE");
  process.exit(0);
});
