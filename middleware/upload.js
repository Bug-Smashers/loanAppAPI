const path =require("path")
const multer=require("multer")

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let ext=path.extname(file.originalname)
        console.log(Date.now())

        cb(null,Date.now()+ext)

    }
})

var upload=multer({
    storage:storage,
    fileFilter:function(req,file,callback){
        if(
            file.mimetype=="image/png"||
            file.mimetype=="image/jpg"||
            file.mimetype=="image/pdf"
        ){
            callback(null,true)
        }
        else{
            console.log("only jpg,pdf & png file supported!")
            callback(null,false)
        }
    },
    limits:{
        fileSize:1024*1024*2
    }
})

module.exports=upload