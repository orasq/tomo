const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} = graphql;

// Models
const User = require("../models/User");
const Personality = require("../models/Personality");

// Object Types

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
    birthdate: { type: GraphQLInt },
    city: { type: GraphQLString },
    job: { type: GraphQLString },
    personality: {
      type: PersonalityType,
      resolve(parent, args) {
        return Personality.findById(parent.personalityId);
      }
    }
  })
});

const PersonalityType = new GraphQLObjectType({
  name: "Personality",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString }
  })
});

// ROOT QUERY

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      }
    },
    personality: {
      type: PersonalityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Personality.findById(args.id);
      }
    },
    personalities: {
      type: new GraphQLList(PersonalityType),
      resolve(parent, args) {
        return Personality.find({});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
