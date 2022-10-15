const mongoose = require("mongoose");
const OrganizationSchema = new mongoose.Schema({
   organization_name :{ type: String, required: true },
    propertynum:{type: Number, required: true},
});

const FieldModel = mongoose.model("organization", OrganizationSchema);

module.exports = FieldModel;