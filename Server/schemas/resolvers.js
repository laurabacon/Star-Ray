const { Profile } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    profile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('Not logged in');
    },
    me: async (parent, args, context) => {
        if (context.user) {
          return Profile.findOne({ _id: context.user._id });
        }
        throw AuthenticationError;
    },
  },
  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);
      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const correctPassword = await profile.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    logout: async (parent, args, context) => {
      if (context.user) {
        // Perform any necessary logout actions
        // For example, you can invalidate the token or remove it from the client-side storage
        return { message: 'Logged out successfully' };
      }
      throw new AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;