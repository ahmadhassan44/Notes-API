const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/notes", noteRouter);

mongoose
    .connect(process.env.CONNECTION)
    .then(() => {
        console.log("Database connection established");
        app.listen(process.env.PORT, () => {
            console.log("Server running on PORT:"+process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
