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
    description: { type: GraphQLString }
  })
});

const PersonalityType = new GraphQLObjectType({
  name: "Personality",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString }
  })
});

//
//
//
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

//
//
//
// MUTATIONS

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        let user = new UserModel({
          email: args.email,
          password: args.password,
          name: args.name
        });
        return user.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
