import express from "express";
import { connectDB } from "./src/config/database.js";
import todosRouter from "./src/routes/todos.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use("/todos", todosRouter);
app.use("/done", todosRouter);


await connectDB();

app.get('/', (req, res) => {
  res.send('Welcome to my To Do List web app !');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
