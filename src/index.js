const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/notes", noteRouter);

mongoose
    .connect("mongodb+srv://admin:ahmad123@atlascluster.5w0s17v.mongodb.net/")
    .then(() => {
        console.log("Database connection established");
        app.listen(5000, () => {
            console.log("Server running on PORT:5000");
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
