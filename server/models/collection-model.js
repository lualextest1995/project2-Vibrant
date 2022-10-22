const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  photographer: { type: String, required: true },
  photographer_url: { type: String, required: true },
  src: { type: String, required: true },
  alt: { type: String },
  original: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;
