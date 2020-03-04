const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languagesSchema = new Schema({
  languageId: String,
  levelId: String
});

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  birthdate: Number,
  city: String,
  personalityId: String,
  job: String,
  description: String,
  languages: [languagesSchema],
  signupDate: String,
  lastGeoLocalisation: {
    lat: String,
    long: String
  }
});

module.exports = mongoose.model("user", userSchema);
