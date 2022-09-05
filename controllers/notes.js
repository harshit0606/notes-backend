const Notes = require("../model/note");

exports.getParams = (req, res, next) => {
  Notes.findById(req.params.noteId).exec((err, note) => {
    if (err || !note) {
      return res.json({ message: "User Not Found" });
    }
    req.note = note;
    next();
  });
};

exports.addNote = (req, res) => {
  Notes.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
};

exports.getSingleNote = (req, res) => {
  res.json(req.note);
};

exports.getNotes = (req, res) => {
  Notes.find()
  .exec((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
};

exports.editNote = async (req, res) => {
  console.log(`${JSON.stringify(req.note)} , ${JSON.stringify(req.body)}`);
  let note;
  try {
    note = await Notes.findByIdAndUpdate(
      req.params.noteId,
      {
        $set: {
          Title: req.body.Title ? req.body.Title : req.note.Title,
          Tagline: req.body.Tagline ? req.body.Tagline : req.note.Tagline,
          Text: req.body.Text ? req.body.Text : req.note.Text,
          isPinned: req.body.isPinned ,
        },
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({note});
};

exports.deleteNode = async (req,res)=>{
    try{
       await Notes.findByIdAndDelete(req.params.noteId);
    }catch(err){
        console.log(err);
    }
    res.status(200).json({message: "NOTE DELETED!"});
}
