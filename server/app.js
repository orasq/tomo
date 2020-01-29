// Express server init
let express = require("express");
let app = express();

const schema = require("./schemas/schema");
// GraphQL config
const graphqlHTTP = require("express-graphql");
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// Enable usage of 'Environment Variables'
const dotenv = require("dotenv");
dotenv.config();

// DB config with Mongoose
const mongoose = require("mongoose");
// To fix all deprecation warnings
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
// DB connection
mongoose.connect(process.env.CONNECTIONSTRING);
mongoose.connection.once("open", () => {
  app.listen(3000);
});
