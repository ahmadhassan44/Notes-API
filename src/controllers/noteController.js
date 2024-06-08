const noteModel = require("../models/note");
const mongoose=require("mongoose");

const addnote = async (req, res) => {
    const { title, body } = req.body;
    try {
        const result = await noteModel.create({
            title: title,
            body: body,
            userId: req.userId
        });
        if (result) {
            return res.status(200).json({ message: "Note Added!" });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong");
    }
};
const getnotes = async (req, res) => {
    try {
        const result = await noteModel.find({ userId: req.userId });
        if (result.length > 0) {
            return res.status(200).json(result);
        } else {
            return res.status(404).send("No notes found");
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong");
    }
};
const updatenote = async (req, res) => {
    try {
        const { title, body } = req.body;
        const updatednote={
            title:title,
            body:body,
            userId:req.userId
        }
        const result = await noteModel.findByIdAndUpdate(req.params.id, updatednote, { new: true });
        if (result) {
            return res.status(200).send("Note updated!");
        } else {
            return res.status(404).send("Note not found");
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong");
    }
};

const  deletenote = async (req, res) => {
    try {
        const result = await noteModel.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(202).send("Note Deleted");
        } else {
            return res.status(404).send("Note not found");
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong");
    }
};

module.exports = { deletenote, updatenote, getnotes, addnote };
