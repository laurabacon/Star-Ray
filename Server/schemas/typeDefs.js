const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }
  type Product {
    _id: ID
    scent: String
    size: String
    price: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    user: User
    me: User
    getUser(userId: ID!): User
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









