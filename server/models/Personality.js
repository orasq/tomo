const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalitySchema = new Schema({
  type: String
});

module.exports = mongoose.model("personalities", personalitySchema);
