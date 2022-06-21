import { Component, OnInit } from '@angular/core';
// import axios from "axios";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { TodosService } from '../../services/todos.service'
import { TodoPayload, TodoPayloadUpdateContent, TodoPayloadUpdateStatus } from 'src/app/models/todo.model';

@Component({
  selector: 'app-get-todo-tasks',
  templateUrl: './get-todo-tasks.component.html',
  styleUrls: ['./get-todo-tasks.component.scss']
})
export class GetTodoTasksComponent implements OnInit {
  faTrash = faTrash ;
  todoTasksArray: TodoPayload[] = [];
  // doneCheck: any;

  constructor (
    private todosService : TodosService,
  ) {}

  ngOnInit(): void {
    this.getTodoTasks();  
  }


  async getTodoTasks() {
    this.todosService.getTodoTasks().subscribe((results) => {
      this.todoTasksArray = results;
    });
    // const res = await axios.get('http://localhost:5000/api/ongoing')
    // this.todoTasksArray = res.data
  }

  async onCheckboxChange(id: string) {
    this.todosService.getTodoById(id).subscribe((result) => {
      let doneCheck = result.done;
      doneCheck = !doneCheck;
      let body: TodoPayloadUpdateStatus = {
        "done": doneCheck.toString(),
      }
      this.todosService.updateTodoStatus(id, body).subscribe(() => {
        this.getTodoTasks();
      });
    });
    // const res = await axios.get('http://localhost:5000/api/todos/' + id)
    // this.doneCheck = res.data.done
    // this.doneCheck = !this.doneCheck;
    // await axios.patch('http://localhost:5000/api/todos/' + id, {
    //   "done": this.doneCheck.toString()
    // })
  }

  async onSubmit(id: string, content: string) {
    let body: TodoPayloadUpdateContent = {
      "content": content,
    }
    this.todosService.updateTodoContent(id, body).subscribe(() => {
      this.getTodoTasks();
    });
  }

  async contentLostFocus() {
    // BUG : when immediately clicked on another input, alert box loops over and over again
    // console.log("Don't forget to press on ENTER to save changes!")
  }


  async deleteTodos(id: string) {
    this.todosService.deleteTodos(id).subscribe(() => {
      this.getTodoTasks()
    });
    // await axios.delete('http://localhost:5000/api/todos/' + id)
  }

}
