const express = require("express");
const route = express.Router();
const {
  addNote,
  getNotes,
  getParams,
  getSingleNote,
  editNote,
  deleteNode
} = require("../controllers/notes");
route.get("/", (req, res) => {
  res.json("HEllo");
});
route.post("/addnote", addNote);
route.get("/getnotes", getNotes);
// route.param("noteId", getParams);
route.get("/getnote/:noteId", getParams, getSingleNote);
route.patch("/editnote/:noteId", getParams, editNote);
route.delete('/deletenote/:noteId',getParams,deleteNode);
module.exports = route;
