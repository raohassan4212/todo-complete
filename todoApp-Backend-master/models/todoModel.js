const mongoose = require("../db");

const schema = new mongoose.Schema(
    {
        task: String,
    }

);

module.exports = mongoose.model("task", schema)