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

    if (this.tab == 1) {
      this.tab = 1;
      this.getTodos();
    }

    if (this.tab == 2) {
      this.tab = 2;
      this.getDoneTasks();
    }

    if (this.tab == 3) {
      this.tab = 3;
      this.getAllTodos();
    }
   }

  changeTab(index: number) {
    switch (index) {
      // Tab 1 : get the on-going to-dos list
      case 1 :
          this.tab = 1;
          this.getTodos();
          console.log("originally", this.tab)

          break;
        // Tab 2 : get the done to-dos list
        case 2:
          this.tab = 2;
          this.getDoneTasks();
          console.log("originally", this.tab)

          break;
        // Tab 3 : get all to-dos
        case 3:
          this.tab = 3;
          this.getAllTodos();
          console.log("originally", this.tab)

          break;
        default:
          console.log("Oops");
    }

    console.log("originally", this.tab)

  }

  getTodos() {
    this.todosService.getTodoTasks().subscribe((results) => {
      this.todosArray = results;
    });
  }

  getDoneTasks() {
    this.todosService.getDoneTasks().subscribe((results) => {
      this.todosArray = results;
    });
  }


   getAllTodos() {
    this.todosService.getAllTodos().subscribe(results => {
      this.todosArray = results;
    });
  }

  onCheckboxChange(id: string) {
    this.todosService.getTodoById(id).subscribe((result)=>{
      let doneCheck = result.done;
      doneCheck = !doneCheck;
      let body: TodoPayloadUpdateStatus = {
        "done": doneCheck.toString(),
      }
      this.todosService.updateTodoStatus(id, body).subscribe(()=>{
        this.refreshAfterChanges();
        console.log("Update tick ", this.tab)
      }

      );


    });
  }

  refreshAfterChanges() {
    console.log("before refresh", this.tab)

    switch (this.tab) {
      // Tab 1 : get the on-going to-dos list
      case 1 :
          this.getTodos();
          break;
        // Tab 2 : get the done to-dos list
        case 2:
          this.getDoneTasks();
          break;
        // Tab 3 : get all to-dos
        case 3:
          this.getAllTodos();
          break;
        default:
          console.log("Oops");
    }

    console.log("after refresh", this.tab)


  }

  onSubmit(id: string, content: string) {
    let body: TodoPayloadUpdateContent = {
      "content": content,
    }
    this.todosService.updateTodoContent(id, body).subscribe();
    this.refreshAfterChanges();
    console.log("update text", this.tab)

  }

  contentLostFocus() {
    // BUG : when immediately clicked on another input, alert box loops over and over again
    // console.log("Don't forget to press on ENTER to save changes!")
  }
  
  deleteTodos(id: string) {
    this.todosService.deleteTodos(id).subscribe(() => {
      this.refreshAfterChanges();
      console.log("on delete", this.tab)
    });
  }
}
