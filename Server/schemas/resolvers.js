const { User, Product } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const resolvers = {
  Query: {
    // user: async (parent, { userId }, context) => {
    //   try {
    //     const user = await User.findById(userId);
    //     return user;
    //   } catch (error) {
    //     throw new ApolloError(
    //       "Failed to fetch product details",
    //       "FETCH_PRODUCT_ERROR",
    //       { originalError: error }
    //     );
    //   }
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    getUser: async (parent, { userId }, context) => {
      try {
        const user = await User.findById(userId);
        if (!user) {
          throw new AuthenticationError("User not found");
        }
        return user;
      } catch (error) {
        throw new AuthenticationError("Failed to fetch user details");
      }
    },
    getProduct: async (parent, { productId }, context) => {
      try {
        const product = await Product.findById(productId);
        if (!product) {
          throw new AuthenticationError("Product not found");
        }
        return product;
      } catch (error) {
        throw new AuthenticationError("Failed to fetch product details");
      }
    },
    getAllProducts: async (parent, args, context) => {
      try {
        const products = await Product.find();
        return products;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      try {
        if (!name || !email || !password) {
          throw new Error("All fields are required.");
        }
        if (password.length < 5) {
          throw new Error("Password must be at least 5 characters long.");
        }
        const user = await User.create({ name, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("Incorrect email or password");
        }
        const correctPassword = await user.isCorrectPassword(password);
        if (!correctPassword) {
          throw new AuthenticationError("Incorrect email or password");
        }
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    logout: async (parent, args, context) => {
      try {
        if (context.user) {
          return { message: "Logged out successfully" };
        }
        throw new AuthenticationError("Not logged in");
      } catch (error) {
        throw new Error(error.message);
      }
    },
    addProductToCart: async (parent, { productId }, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          "You must be logged in to add products to your cart."
        );
      }
    },
  },
};
module.exports = resolvers;
