const express=require("express");
const {deletenote,updatenote,getnotes,addnote} = require("../controllers/noteController");
const auth = require("../middlewares/auth");
const noteRouter=express.Router();

noteRouter.post("/",auth,addnote);
noteRouter.get("/",auth,getnotes);
noteRouter.delete("/:id",auth,deletenote);
noteRouter.put("/:id",auth,updatenote);
module.exports=noteRouter;