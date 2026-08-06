const Todo =
require("../models/todo.model");



exports.getAllTodos = async()=>{

    return await Todo.find();

};



exports.getTodoById = async(id)=>{

    return await Todo.findById(id);

};



exports.createTodo = async(data)=>{

    const todo =
    new Todo(data);


    return await todo.save();

};



exports.updateTodo = async(id,data)=>{

    return await Todo.findByIdAndUpdate(

        id,

        data,

        {
            new:true,
            runValidators:true
        }

    );

};



// exports.deleteTodo = async(id)=>{

//     return await Todo.findByIdAndDelete(id);

// };

export const deleteTodo = async (id) => {
    const db = getDB();

    const result = await db
        .collection("todolist")
        .deleteOne({
            _id: Number(id)
        });

    return result.deletedCount > 0;
};