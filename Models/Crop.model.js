const mongoose = require("mongoose");
const CropSchema = new mongoose.Schema({
  nameofcrop: { type: String, required: true },
  temp:{type: Number, required: true}
});

const CropsModel = mongoose.model("crops", CropSchema);

module.exports = CropsModel;