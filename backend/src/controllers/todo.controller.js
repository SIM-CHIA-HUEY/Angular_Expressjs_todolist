import * as todoService from "../services/todo.service.js";

export const getAllTodos = async (req, res) => {
    try {
        const todos = await todoService.getAllTodos();

        res.status(200).json(todos);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getDoneTodos = async (req, res) => {
    try {
        const todosDone = await todoService.getDoneTodos();

        res.status(200).json(todosDone);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getOngoingTodos = async (req, res) => {
    try {
        const todos = await todoService.getOngoingTodos();

        res.status(200).json(todos);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateTodoStatus = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { isDone } = req.body;

        const result = await todoService.updateTodoStatus(id, isDone);

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Tâche introuvable"
            });
        }

        res.status(200).json({
            message: "Tâche mise à jour"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateTodoTitle = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title } = req.body;

        const result = await todoService.updateTodoTitle(id, title);

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Tâche introuvable"
            });
        }

        res.status(200).json({
            message: "Tâche mise à jour"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateTodoContent = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { content } = req.body;

        const result = await todoService.updateTodoContent(id, content);

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Tâche introuvable"
            });
        }

        res.status(200).json({
            message: "Tâche mise à jour"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const result = await todoService.deleteTodo(id);

        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(204).send();

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const createTodo = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }

        const newTodo = await todoService.createTodo(title, content);

        res.status(201).json({
            message: "Todo created",
            todo: newTodo
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};