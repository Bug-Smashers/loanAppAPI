const mongoose=require("mongoose");

const userPersonaldetails=mongoose.Schema({
    documenttype:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("userPersonaldetails",userPersonaldetails);