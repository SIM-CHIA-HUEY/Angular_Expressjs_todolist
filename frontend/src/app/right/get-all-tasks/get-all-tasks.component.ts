import { Component, OnInit } from '@angular/core';
// import axios from "axios";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { TodosService } from '../../services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { TodoPayload, TodoPayloadUpdateContent, TodoPayloadUpdateStatus } from 'src/app/models/todo.model';

@Component({
  selector: 'app-get-all-tasks',
  templateUrl: './get-all-tasks.component.html',
  styleUrls: ['./get-all-tasks.component.scss']
})

export class GetAllTasksComponent implements OnInit {

  faTrash = faTrash;
  todosArray: TodoPayload[] = [];
  // doneCheck: any ;

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService, 
    ){}

  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos() {
    this.todosService.getAllTodos().subscribe(data => {
      this.todosArray = data;
    });
  }

  // async getTodos() {
  //   const res = await axios.get('http://localhost:5000/api/todos')
  //   this.todosArray = res.data
  // }

  async onCheckboxChange(id: string) {
    this.todosService.getTodoById(id).subscribe((result)=>{
      let doneCheck = result.done;
      doneCheck = !doneCheck;
      let body: TodoPayloadUpdateStatus = {
        "done": doneCheck.toString(),
      }
      this.todosService.updateTodoStatus(id, body).subscribe();
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
      this.getTodos();
    });
  }

  async contentLostFocus() {
    // BUG : when immediately clicked on another input, alert box loops over and over again
    // console.log("Don't forget to press on ENTER to save changes!")
  }
  
  async deleteTodos(id: string) {
    this.todosService.deleteTodos(id).subscribe();
    window.location.reload();

    // await axios.delete('http://localhost:5000/api/todos/' + id)
  }
}
