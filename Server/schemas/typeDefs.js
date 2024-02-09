const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    price: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    me: User
    getProduct(productId: ID!): Product
    getAllProducts: [Product]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Message
    addProductToCart(productId: ID!): Message
  }

  type Message {
    message: String
  }
`;

module.exports = typeDefs;