const express=require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());

app.use((req,res,next)=>{
    console.log("http "+req.method+" url "+req.url);
    next();
})

app.use("/users",userRouter);
app.use("/notes",noteRouter);


mongoose
.connect("mongodb+srv://admin:ahmad123@atlascluster.5w0s17v.mongodb.net/")
.then(()=>{
    console.log("Database connection established");
    app.listen(5000,()=>{
        console.log("Server running on PORT:5000");
    });
})
.catch((console.error()))
