require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;


app.use(express.json());

const routes = require("./routes/routes.js")

app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Flirtini Backend working on port ${port}`);
})
