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
        app.use(express.json())
        app.use("/api", routes)

        app.listen(5000, () => {
            console.log(`DB server has started`)
        })
    })

// index.get('/', (req, res) => {
//     res.send('Hello World !')
// })

// index.post('/', (req, res) => {
//     res.send('Got a POST request')
// })
//
// index.put('/:userId', (req, res) => {
//     res.send('Got a PUT request at /user')
// })
//
// index.delete('/:userId', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })
//
// index.get('/random', (req, res) => {
//     res.send('random.text')
// })
//
// index.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
// })

index.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
