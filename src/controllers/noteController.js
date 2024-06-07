const noteModel=require("../models/note");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { model } = require("mongoose");
const SECRET_KEY="SECURE"

const addnote=async (req,res)=>{
    const {title,body,userId}=req.body;
    try {
        const result=await noteModel.create({
            title:title,
            body:body,
            userId:userId
        })
        if(result)
            return res.status(200).json({message:"Note Added!"})
    } catch (error) {
        
    }

}

module.exports=addnote;