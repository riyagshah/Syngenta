const mongoose = require("mongoose");
const PropertiesSchema = new mongoose.Schema({
    organizationid:{type: String, required: true },
    propertyname: { type: String, required: true },
    temp:{type: Number, required: true},
    fieldnumber:{type: Number, required: true},
    
});

const PropertiesModel = mongoose.model("properties", PropertiesSchema);

module.exports = PropertiesModel;