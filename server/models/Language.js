const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
  language: String
});

module.exports = mongoose.model("languages", languageSchema);
