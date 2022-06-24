import { Component, OnInit } from '@angular/core';
// import axios from "axios";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { TodosService } from '../services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { TodoPayload, TodoPayloadUpdateContent, TodoPayloadUpdateStatus } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  tab = 0;
  faTrash = faTrash;
  todosArray: TodoPayload[] = [];

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService, 
    ){}

  ngOnInit(): void {
    if (this.tab == 0) {
      this.tab = 1;
      this.getTodos();
    }
   }

  changeTab(index: number) {
    // // Tab 1 : get the on-going to-dos list
    // if(index===1){
    //   this.tab = 1;
    //   this.getTodos();
    //   console.log("1")
    // }
    // // Tab 2 : get the done to-dos list
    // if(index===2){
    //   this.tab = 2;
    //   this.getDoneTasks();
    //   console.log("2")

    // }
    // // Tab 3 : get all to-dos
    // if(index===3){
    //   this.tab = 3;
    //   this.getAllTodos();
    //   console.log("3")

    // }
  
    switch (index) {
      case 1 :
          this.tab = 1;
          this.getTodos();
          console.log("1");
          break;
        case 2:
          this.tab = 2;
          this.getDoneTasks();
          console.log("2");
          break;
        case 3:
          this.tab = 3;
          this.getAllTodos();
          console.log("3");
          break;
        default:
          console.log("Oops");

    }
  }

  async getTodos() {
    this.todosService.getTodoTasks().subscribe((results) => {
      this.todosArray = results;
    });
  }

  async getDoneTasks() {
    this.todosService.getDoneTasks().subscribe((results) => {
      this.todosArray = results;
    });
  }


  async getAllTodos() {
    this.todosService.getAllTodos().subscribe(results => {
      this.todosArray = results;
    });
  }

  async onCheckboxChange(id: string) {
    this.todosService.getTodoById(id).subscribe((result)=>{
      let doneCheck = result.done;
      doneCheck = !doneCheck;
      let body: TodoPayloadUpdateStatus = {
        "done": doneCheck.toString(),
      }
      this.todosService.updateTodoStatus(id, body).subscribe();
    });
  }

  async onSubmit(id: string, content: string) {
    let body: TodoPayloadUpdateContent = {
      "content": content,
    }
    this.todosService.updateTodoContent(id, body).subscribe(() => {
      if(this.tab === 3){
        this.getAllTodos();
      }
    });
  }

  async contentLostFocus() {
    // BUG : when immediately clicked on another input, alert box loops over and over again
    // console.log("Don't forget to press on ENTER to save changes!")
  }
  
  async deleteTodos(id: string) {
    this.todosService.deleteTodos(id).subscribe();
    if(this.tab === 3){
      this.getAllTodos();
    }
  }
}
