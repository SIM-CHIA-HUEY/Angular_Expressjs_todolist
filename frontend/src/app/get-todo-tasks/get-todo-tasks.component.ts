import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-get-todo-tasks',
  templateUrl: './get-todo-tasks.component.html',
  styleUrls: ['./get-todo-tasks.component.css']
})
export class GetTodoTasksComponent implements OnInit {

  todoTasksArray: any;

  constructor() { }

  ngOnInit(): void {
    this.getTodoTasks();
  }

  async getTodoTasks() {
    const res = await axios.get('http://localhost:5000/api/ongoing')
    this.todoTasksArray = res.data
    // console.log(this.todoTasksArray)
  }

}
