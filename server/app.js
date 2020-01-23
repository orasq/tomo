const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Schema
const schema = require('./schema/schema');

// Init express server
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// To fix all deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
// Connect to MongoDB Atlas DB
mongoose.connect('mongodb+srv://todoAppUser:todoappuser@cluster0-ey2z3.mongodb.net/GraphQLNetNinja?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
});

// Tell express to use GraphQL on this route (+ options)
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

// Express listening on port ...
app.listen(4000, () => {
    console.log('Now listening for requests on port 4000');
});