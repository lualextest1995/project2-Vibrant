const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  photographer: { type: String, required: true },
  photographer_url: { type: String, required: true },
  src: { type: String, required: true },
  alt: { type: String },
  original: { type: String, required: true },
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;