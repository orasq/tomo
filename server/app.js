// Express server init
let express = require("express");
let app = express();

// Enable usage of 'Environment Variables'
const dotenv = require("dotenv");
dotenv.config();

// DB config
let mongodb = require("mongodb");
mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err, client) {
    db = client.db();
    app.listen(3000);
  }
);
