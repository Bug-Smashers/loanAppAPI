const express=require("express");
const app=express();
const mongoose=require("mongoose");
const userdetails=require("./Models/model")
const userPersonaldetails=require("./Models/userPersonaldetails")

app.use(express.json())

mongoose.connect("mongodb+srv://loanapi:loanapi@cluster0.sdy8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{
    console.log("db is connected")
}).catch(err=>{
    console.log(err)
})
app.get('/',(req,res)=>{
    res.send("welcome")
})
app.post('/login',async (req,res)=>{
    const {username}=req.body;
    // console.log(username)
     const {password}=req.body;
    try{
        const  newData=new userdetails({username,password})
        // console.log(newData)
       await  newData.save()
        return  res.json(await userdetails.find())
    }
    catch(err){
        console.log(err.message)
    }
})
app.post('/personal',async (req,res)=>{
    const {username}=req.body;
    // console.log(username)
     const {password}=req.body;
    try{
        const  newData=new userdetails({username,password})
        // console.log(newData)
       await  newData.save()
        return  res.json(await userdetails.find())
    }
    catch(err){
        console.log(err.message)
    }
})

app.listen(5000,(e)=>{
    console.log("connected successfully on port 5000")
})