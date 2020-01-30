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
const UserModel = require("../models/User");
const PersonalityModel = require("../models/Personality");
const LanguageModel = require("../models/Language");
const LanguageLevelModel = require("../models/LanguageLevel");

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
        return PersonalityModel.findById(parent.personalityId);
      }
    },
    description: { type: GraphQLString },
    languages: { type: new GraphQLList(UserLanguageType) }
  })
});

const PersonalityType = new GraphQLObjectType({
  name: "Personality",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString }
  })
});

const UserLanguageType = new GraphQLObjectType({
  name: "UserLanguage",
  fields: () => ({
    id: { type: GraphQLID },
    language: {
      type: LanguageType,
      resolve(parent, args) {
        return LanguageModel.findById(parent.languageId);
      }
    },
    level: {
      type: LanguageLevelType,
      resolve(parent, args) {
        return LanguageLevelModel.findById(parent.levelId);
      }
    }
  })
});

const LanguageType = new GraphQLObjectType({
  name: "Language",
  fields: () => ({
    id: { type: GraphQLID },
    language: { type: GraphQLString }
  })
});

const LanguageLevelType = new GraphQLObjectType({
  name: "LanguageLevel",
  fields: () => ({
    id: { type: GraphQLID },
    level: { type: GraphQLString }
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
        return UserModel.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
