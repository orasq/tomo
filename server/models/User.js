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
  job: String,
  personalityId: String,
  languages: [languagesSchema],
  description: String
});
module.exports = mongoose.model("user", userSchema);
