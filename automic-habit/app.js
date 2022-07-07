require("dotenv").config();
const express = require('express')

//  routers
const todoRouter = require('./routes/todoRoute');

// app
const app = express()
const port = process.env.SERVER_PORT

// parse json
app.use(express.json())

app.use('/api/v1/todo', todoRouter);

const start = async () => {
    try {

        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();

