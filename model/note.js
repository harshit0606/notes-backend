const mongoose=require("mongoose");

const NotesSchema=mongoose.Schema({
    Title:{
        type:String,
        required:false
    },
    Tagline:{
        type:String,
        required:false
    },
    Text:{
        type:String,
        required:false
    },
    isPinned:{
        type:Boolean,
        required:true
    }
},{timestamps:true});

module.exports =  Notes = mongoose.model("Notes",NotesSchema);

