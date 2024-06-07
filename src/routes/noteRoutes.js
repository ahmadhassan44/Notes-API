const express=require("express");
const noteRouter=express.Router();

noteRouter.post("/add",(req,res)=>{
    res.status(200).send("added")
})
noteRouter.get("/retreive",(req,res)=>{
    res.status(200).send("retrived")
})

module.exports=noteRouter;