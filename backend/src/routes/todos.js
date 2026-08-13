import express from "express";
import { getDB } from "../config/database.js";
// import * as todoController from "../controllers/todo.controller.js";


const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const db = getDB();

        const todos = await db
            .collection("todolist")
            .find({})
            .toArray();

        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/done", async (req, res) => {
    try {
        const db = getDB();

        const todosDone = await db
            .collection("todolist")
            .find({ isDone: true })
            .toArray();

        res.status(200).json(todosDone);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/ongoing", async (req, res) => {
    try {
        const db = getDB();

        const todos = await db
            .collection("todolist")
            .find({ isDone: false })
            .toArray();

        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Update status of a todo (isDone)
router.patch("/:id", async (req, res) => {
    try {
        const db = getDB();

        const id = Number(req.params.id);
        const { isDone } = req.body;

        const result = await db
            .collection("todolist")
            .updateOne(
                { _id: id },
                {
                    $set: {
                        isDone: isDone
                    }
                }
            );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Tâche introuvable"
            });
        }

        res.status(200).json({
            message: "Tâche mise à jour"
        });

    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Update title of a todo
router.patch("/:id/title", async (req, res) => {
    try {
        const db = getDB();

        const id = Number(req.params.id);
        const { title } = req.body;

        const result = await db
            .collection("todolist")
            .updateOne(
                { _id: id },
                {
                    $set: {
                        title: title
                    }
                }
            );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Tâche introuvable"
            });
        }

        res.status(200).json({
            message: "Tâche mise à jour"
        });

    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Update content of a todo
router.patch("/:id/content", async (req, res) => {
    try {
        const db = getDB();

        const id = Number(req.params.id);
        const { content } = req.body;

        const result = await db
            .collection("todolist")
            .updateOne(
                { _id: id },
                {
                    $set: {
                        content: content
                    }
                }
            );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Tâche introuvable"
            });
        }

        res.status(200).json({
            message: "Tâche mise à jour"
        });

    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// DELETE /todos/:id
router.delete("/:id", async (req, res) => {
    try {
        const db = getDB();
        const id = Number(req.params.id);
        const result = await db
            .collection("todolist")
            .deleteOne({
                _id: id
            });
        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }
        res.status(204).send();
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// POST /todos
router.post("/", async (req, res) => {

    try {
        const db = getDB();

        const { title, content } = req.body;


        // Vérification des champs obligatoires
        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }


        // Trouver le dernier ID pour créer le suivant
        const lastTodo = await db
            .collection("todolist")
            .find()
            .sort({ _id: -1 })
            .limit(1)
            .toArray();


        const newId = lastTodo.length > 0
            ? lastTodo[0]._id + 1
            : 1;


        const newTodo = {
            _id: newId,
            title: title,
            content: content,
            isDone: false
        };


        const result = await db
            .collection("todolist")
            .insertOne(newTodo);


        res.status(201).json({
            message: "Todo created",
            todo: newTodo
        });


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

});

export default router;