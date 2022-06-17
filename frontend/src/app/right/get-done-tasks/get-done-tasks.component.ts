import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { TodosService } from '../../services/todos.service';
import { TodoPayload, TodoPayloadUpdateStatus } from 'src/app/models/todo.model';

@Component({
  selector: 'app-get-done-tasks',
  templateUrl: './get-done-tasks.component.html',
  styleUrls: ['./get-done-tasks.component.css']
})
export class GetDoneTasksComponent implements OnInit {

  doneTasksArray: TodoPayload[] = [];
  // doneCheck: any;
  faTrash = faTrash;

  constructor(
    private todosService: TodosService, 
  ) { }

  ngOnInit(): void {
    this.getDoneTasks();
  }

  async getDoneTasks() {
    this.todosService.getDoneTasks().subscribe((results) => {
      this.doneTasksArray = results;
    });

    // const res = await axios.get('http://localhost:5000/api/done')
    // this.doneTasksArray = res.data
  }

  async onCheckboxChange(id: string) {

    this.todosService.getTodoById(id).subscribe((result) => {
      let doneCheck = result.done;
      doneCheck = !doneCheck;
      let body: TodoPayloadUpdateStatus = {
        "done": doneCheck.toString()
      }
      this.todosService.updateTodoStatus(id, body).subscribe(() => {
        this.getDoneTasks();
      });
    });

    // const res = await axios.get('http://localhost:5000/api/todos/' + id)
    // this.doneCheck = res.data.done
    // this.doneCheck = !this.doneCheck;
    // await axios.patch('http://localhost:5000/api/todos/' + id, {
    //   "done": this.doneCheck.toString()
    // })
  }

  async deleteTodos(id: any) {
    this.todosService.deleteTodos(id).subscribe(() => {
      this.getDoneTasks();
    });
    
    // await axios.delete('http://localhost:5000/api/todos/' + id)
  }

}