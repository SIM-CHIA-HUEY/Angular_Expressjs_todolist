const express = require('express')
const index = express()
const port = 3000
const mongoose = require("mongoose")
const routes = require("./routes")


// Connect to MongoDB database
mongoose
    .connect("mongodb://127.0.0.1:27017/todolist", { useNewUrlParser: true })
    .then(() => {
        const app = express()
        const cors = require('cors');
        app.use(cors());
        app.use(express.json())
        app.use("/api", routes)

        app.listen(5000, () => {
            console.log(`DB server has started`)
        })
    })

index.get('/', (req, res) => {
    res.send('Welcome to my To Do List web app !')
})

index.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
