const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://inferno1:YXhJw7BhkfHhf6j@cluster0.gqeco.mongodb.net/backendtodo?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log("Database is Connect");
        }
        else {
            console.log("Database is not connect");
        }
    }
);

module.exports = mongoose;