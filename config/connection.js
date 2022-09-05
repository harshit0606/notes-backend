const mongoose=require("mongoose");
const connect=async()=>{
await mongoose.connect("mongodb+srv://memoriesproject:sRdwwNDhQ1bwDZxh@cluster0.xcyfe.mongodb.net/notes?retryWrites=true&w=majority",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("MongoDB Connected");
    }
});
}

module.exports = connect;