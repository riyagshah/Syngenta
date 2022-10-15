const mongoose = require("mongoose");
const FieldSchema = new mongoose.Schema({
    
  fieldname: { type: String, required: true },
  fieldsize:{ type: Number, required: true },
   propertyid :{type: String, required: true },
   temp:{type:Number,required:true}
});

const FieldModel = mongoose.model("fields", FieldSchema);

module.exports = FieldModel;