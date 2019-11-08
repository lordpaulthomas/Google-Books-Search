const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedScema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  descriptions: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true }
})

const Saved = mongoose.model("Saved", savedScema);

module.exports = Saved;
