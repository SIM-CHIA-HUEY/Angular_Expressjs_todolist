const todoService =
require("../services/todo.service");

// import * as todoService from "../services/todo.service.js";


exports.getTodos = async(req,res,next)=>{

    try{
        const todos = "all todos"
        res.json(todos);
    }catch(error){
        next(error);
    }
};

exports.getTodo = async(req,res,next)=>{
    try{
        const todo =
        await todoService.getTodoById(
            req.params.id
        );
        if(!todo){
            return res.status(404)
            .json({
                message:"Todo not found"
            });
        }
        res.json(todo);
    }catch(error){
        next(error);
    }
};

exports.createTodo = async(req,res,next)=>{

    try{
        const todo =
        await todoService.createTodo(
            req.body
        );
        res.status(201)
        .json(todo);
    }catch(error){
        next(error);
    }
};

exports.updateTodo = async(req,res,next)=>{
    try{
        const todo =
        await todoService.updateTodo(
            req.params.id,
            req.body
        );
        if(!todo){
            return res.status(404)
            .json({
                message:"Todo not found"
            });
        }
        res.json(todo);
    }catch(error){
        next(error);
    }
};

export const deleteTodo = async(req,res,next)=>{
    try {
        const todo = await todoService.deleteTodo(
            req.params.id
        );

        if(!todo){
            return res.status(404)
                .json({
                    message:"Todo not found"
                });
        }

        res.status(204).send();

    } catch(error) {
        next(error);
    }
};