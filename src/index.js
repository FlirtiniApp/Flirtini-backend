require('dotenv').config();
const port = process.env.PORT;

const express = require('express');
const app = express();

app.use(express.json());

const routes = require("./routes/routes.js");
app.use(routes);

const mongoose = require('mongoose');


// Connect to the database and start the server
console.log("Connecting to database...");
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("\x1b[93mConnected to database\x1b[0m");
        app.listen(port, () => {
            console.log(`\x1b[35mApp listening on port ${port}.\x1b[0m`);
        });
    })
    .catch((err) => {
        console.log("\x1b[41mFailed to connect to database\x1b[0m");
        console.log(err);
    });
