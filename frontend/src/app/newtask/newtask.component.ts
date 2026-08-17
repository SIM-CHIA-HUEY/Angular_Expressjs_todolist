import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { TodosService } from '../services/todos.service';
import { TodoPayloadAddNew } from 'src/app/models/todo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: '.app-newtask',
    templateUrl: './newtask.component.html',
    styleUrls: ['./newtask.component.scss'],
    standalone: false
})
export class NewtaskComponent implements OnInit {
  todosCount: number = 0;
  form: any = {
    todoTitle: '',
    todoContent: ''
  };
  isValidForm = true;
  faPlus = faPlus ;

  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute
    ) 
    {}

  ngOnInit(): void {
    this.getTodosCount();
  }

  async submit () {
    if(this.isValidForm) {
      let body:TodoPayloadAddNew = {
        "title": this.form.todoTitle,
        "content": this.form.todoContent,
        "isDone": false
      }
      this.todosService.addTodo(body).subscribe(response =>
        console.log(response)
      )
    }
  }

  getTodosCount() {
    this.todosService.getAllTodos().subscribe((results) => {
      this.todosCount = results.length;
      console.log("todosCount", this.todosCount);
    });
  }

}
