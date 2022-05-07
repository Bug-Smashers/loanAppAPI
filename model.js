const mongoose=require("mongoose");

const userdetails=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("userdetails",userdetails);