import { getDB } from "../config/database.js";

const collectionName = "todolist";

export const getAllTodos = async () => {
    const db = getDB();

    return await db
        .collection(collectionName)
        .find({})
        .toArray();
};

export const getDoneTodos = async () => {
    const db = getDB();

    return await db
        .collection(collectionName)
        .find({ isDone: true })
        .toArray();
};

export const getOngoingTodos = async () => {
    const db = getDB();

    return await db
        .collection(collectionName)
        .find({ isDone: false })
        .toArray();
};

export const updateTodoStatus = async (id, isDone) => {
    const db = getDB();

    return await db
        .collection(collectionName)
        .updateOne(
            { _id: id },
            {
                $set: {
                    isDone: isDone
                }
            }
        );
};

export const updateTodoTitle = async (id, title) => {
    const db = getDB();

    return await db
        .collection(collectionName)
        .updateOne(
            { _id: id },
            {
                $set: {
                    title: title
                }
            }
        );
};

export const updateTodoContent = async (id, content) => {
    const db = getDB();

    return await db
        .collection(collectionName)
        .updateOne(
            { _id: id },
            {
                $set: {
                    content: content
                }
            }
        );
};

export const deleteTodo = async (id) => {
    const db = getDB();

    return await db
        .collection(collectionName)
        .deleteOne({
            _id: id
        });
};

export const createTodo = async (title, content) => {
    const db = getDB();

    const lastTodo = await db
        .collection(collectionName)
        .find()
        .sort({ _id: -1 })
        .limit(1)
        .toArray();

    const newId = lastTodo.length > 0
        ? lastTodo[0]._id + 1
        : 1;

    const newTodo = {
        _id: newId,
        title,
        content,
        isDone: false
    };

    await db
        .collection(collectionName)
        .insertOne(newTodo);

    return newTodo;
};