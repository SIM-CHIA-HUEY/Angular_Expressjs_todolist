import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-todo-tasks',
  templateUrl: './get-todo-tasks.component.html',
  styleUrls: ['./get-todo-tasks.component.css']
})
export class GetTodoTasksComponent implements OnInit {

  todoTasksArray: any;
  doneCheck: any;
  faTrash = faTrash ;

  ngOnInit(): void {
    this.getTodoTasks();
  }

  async getTodoTasks() {
    const res = await axios.get('http://localhost:5000/api/ongoing')
    this.todoTasksArray = res.data
    // console.log(this.todoTasksArray)
  }

  async onCheckboxChange(id: any) {
    const res = await axios.get('http://localhost:5000/api/todos/' + id)
    this.doneCheck = res.data.done

    this.doneCheck = !this.doneCheck;

    await axios.patch('http://localhost:5000/api/todos/' + id, {
      "done": this.doneCheck.toString()
    })
  }

  async deleteTodos(id: any) {
    await axios.delete('http://localhost:5000/api/todos/' + id)
    window.location.reload();
  }

}
