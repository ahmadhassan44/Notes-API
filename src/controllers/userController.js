const userModel=require("../models/user");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { model } = require("mongoose");
const SECRET_KEY="SECURE"

const signup= async (req,res)=>{

    //check if user already exists
    //generate hashed(encrypted) password
    //enter user in db
    //generate token

    const {username,email,password}=req.body;
    try {
        const existingUser=await userModel.findOne({email:email})
        if(existingUser)
            return res.status(400).json({message:"User Already exists"});
        const hashedpassword= await bcrypt.hash(password,12);
        const result = await userModel.create({
            email:email,
            password:hashedpassword,
            username:username
        });
        const token=jwt.sign({email:result.email,id:result._id},SECRET_KEY);
        res.status(201).json({user:result,token:token});

    } catch (error) {
        res.status(500).send("Something went Wrong!");
    }

}
const signin=async (req,res)=>{
    const{email,password}=req.body;
    try {
        const result=await userModel.findOne({email:email});
        if(result)
            if(await bcrypt.compare(password,result.password))
                {
                    const token=jwt.sign({email:result.email,id:result._id},SECRET_KEY);
                    return res.status(200).send({message:"Logged in",token:token})
                }
            else 
                return res.status(400).send({message:"Invalid password"})  
        else
            return res.status(400).send({message:"User doesn't exists"});
        
    } catch (error) {
        res.status(500).send("Something went Wrong!");
    }

}
module.exports={signup,signin};
