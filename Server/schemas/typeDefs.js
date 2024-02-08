const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profile: Profile
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Message
  }

  type Message {
    message: String
  }
`;

module.exports = typeDefs;