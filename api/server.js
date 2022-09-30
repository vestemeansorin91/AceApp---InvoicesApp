const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017/Ace'

app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(MONGO_URL, function (err) {
    if (err) {
        console.log("Mongo error!", err);
    }
    console.log("Data base is ready!");
    app.listen(PORT, function () {
        console.log(
            ("Server started: "),
            (`Listening to port ${PORT}`)
        );
    });
});