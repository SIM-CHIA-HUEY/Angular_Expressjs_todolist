import express from "express";
import * as todoController from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", todoController.getAllTodos);

// If everything were here - controller, routes and service - it would look like this:
// router.get("/", async (req, res) => {
//     try {
//         const db = getDB();

//         const todos = await db
//             .collection("todolist")
//             .find({})
//             .toArray();

//         res.status(200).json(todos);
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });

router.get("/done", todoController.getDoneTodos);

router.get("/ongoing", todoController.getOngoingTodos);

router.patch("/:id", todoController.updateTodoStatus);

router.patch("/:id/title", todoController.updateTodoTitle);

router.patch("/:id/content", todoController.updateTodoContent);

router.delete("/:id", todoController.deleteTodo);

router.post("/", todoController.createTodo);

export default router;