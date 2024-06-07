const express=require("express");
const addnote = require("../controllers/noteController");
const noteRouter=express.Router();

noteRouter.post("/add",addnote);
module.exports=noteRouter;