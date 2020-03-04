const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageLevelSchema = new Schema({
  level: String
});

module.exports = mongoose.model("languages_levels", languageLevelSchema);
