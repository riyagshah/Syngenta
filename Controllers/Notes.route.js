const express = require("express");
const NotesController = express.Router();

const NoteModel = require("../Models/Organization.model");

const PropertiesModel = require("../Models/Properties.model");

const FieldsModel = require("../Models/Field.model");
const CropModel = require("../Models/Crop.model");
NotesController.post("/create", async (req, res) => {
  const { organization_name, propertynum} = req.body;

  const notesStatus = new NoteModel({ organization_name , propertynum});
  await notesStatus.save();
  return res.send({ message: "Organization Created" });
});
NotesController.get("/", async (req, res) => {

  return res.send( "welcome to organization");
});

NotesController.post("/properties", async (req, res) => {
  const {  organizationid,propertyname,temp,fieldnumber} = req.body;

  const notesStatus = new PropertiesModel({ organizationid,propertyname,temp,fieldnumber});
  await notesStatus.save();
  return res.send({ message: "Properties Created" });
});

  NotesController.get("/properties/:id", async (req, res) => {
    let id=parseInt(req.params.id)
    const notes = await FieldsModel.find({ id });
    return res.send(notes);
    });

NotesController.post("/properties/field/", async (req, res) => {
  const { fieldname, fieldsize,propertyid} = req.body;

  const notesStatus = new FieldsModel({fieldname, fieldsize,propertyid});
  await notesStatus.save();
  return res.send({ message: "Fields Created" });
});
NotesController.get("/properties", async (req, res) => {

  return res.send( "welcome to Properties");
});
NotesController.post("/properties/field/crops", async (req, res) => {
  const { nameofcrop,temp} = req.body;

  const notesStatus = new CropModel({nameofcrop,temp});
  await notesStatus.save();
  return res.send({ message: "crop Created" });
});

NotesController.get("/properties/:propertyid/field/:fieldid", async (req, res) => {
let {propertyid,fieldid}=req.params
 let temp= await FieldsModel.find({id:fieldid});
 console.log(temp)
var temp1=temp[0].temp;
console.log(temp1,"temp1")
let predictedcrop=await CropModel.find({temp:temp1});
let ans=predictedcrop[0].nameofcrop

  return res.send(`Field ${fieldid} has ${ans}`);

});

NotesController.patch("/property/:pid", async (req, res) => {
  const p = req.params.pid;
   
    const updated_note = await PropertiesModel.findOneAndUpdate(
      { _id: p },
      req.body,
    );
    return res.send({ message: "Successfully updated" });
    })

module.exports = NotesController;

