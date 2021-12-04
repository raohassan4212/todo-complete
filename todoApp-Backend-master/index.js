const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Task = require("./models/todoModel")


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/add-todos", async (req, res) => {
    try {
        const task = await new Task({
            task: req.body.todo
        }).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

app.get("/get-todos", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

app.put("/update/:id", async (req, res) => {
    console.log(req.params.id)
    console.log(req.body.updatetodo)
    try {
        const task = await Task.updateOne(
            { _id: req.params.id },
            { $set: { task: req.body.updatetodo } }

        );

        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

app.delete("/delete/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});


app.listen(5000, () => {
    console.log("server is up on port: 5000");
});