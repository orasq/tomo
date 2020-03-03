const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languagesSchema = new Schema({
  languageId: String,
  levelId: String
});

const geoLocSchema = new Schema({
  lat: String,
  long: String
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
  smokingId: String,
  lastGeoLocalisation: [geoLocSchema]
});

module.exports = mongoose.model("user", userSchema);
