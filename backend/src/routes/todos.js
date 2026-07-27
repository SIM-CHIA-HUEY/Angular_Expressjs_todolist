import express from "express";
import { getDB } from "../config/database.js";


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


export default router;