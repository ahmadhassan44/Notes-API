const express=require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app=express();


app.use("/users",userRouter);
app.use("/notes",noteRouter);
app.listen(5000,()=>{
    console.log("Server running in PORT:5000");
})
