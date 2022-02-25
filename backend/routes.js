const express = require("express")
const Todo = require("./models/Todo")
const router = express.Router()

// Get all todos
router.get("/todos", async (req, res) => {
    try {
        const todos = await Todo.find()
        res.send (todos)
    } catch {
        res.status(404)
        res.send({ error: "There's nothing to do for today!" })
    }

})

// Create a new todo
router.post("/todos", async (req, res) => {
    const todo = new Todo({
        content: req.body.content,
        done: req.body.done,
    })
    await todo.save()
    res.send(todo)
})

// Update Done Status
router.patch("/todos/:id", async (req, res) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.id })

        if (req.body.content) {
            todo.content = req.body.content
        }

        if (req.body.done) {
            todo.done = req.body.done
        }

        await todo.save()
        res.send(todo)
    } catch {
        res.status(404)
        res.send({ error: "This todo doesn't exist!" })
    }
})

// Delete a todo
router.delete("/todos/:id", async (req, res) => {
    try {
        await Todo.deleteOne({ _id: req.params.id })
        res.status(204).send()
        res.send("This todo has been deleted")
    } catch {
        res.status(404)
        res.send({ error: "This todo doesn't exist!" })
    }
})

// Get todos which are done
router.get("/todos/done", async (req, res) => {
        const todosDone = await Todo.find( { done: true } )
        res.send (todosDone)
})

// Get todos which are not done yet
router.get("/todos/ongoing", async (req, res) => {
    const todosDone = await Todo.find( { done: false } )
    res.send (todosDone)
})


module.exports = router
