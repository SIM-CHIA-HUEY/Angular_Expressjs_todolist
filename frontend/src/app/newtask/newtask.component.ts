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
  todosArray: any[] = [];
  todosCount$ = this.todosService.todosCount$;

  form: any = {
    todoTitle: '',
    todoContent: ''
  };
  isValidForm = true;
  faPlus = faPlus ;
  submitted = false;

  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute
    ) 
    {}

  ngOnInit(): void {
    this.getTodosCount();
  }

  async submit () {
    this.submitted = true;

    if (!this.form.todoTitle || !this.form.todoContent) {
      return;
    }

    if(this.isValidForm) {
      let body:TodoPayloadAddNew = {
        "title": this.form.todoTitle,
        "content": this.form.todoContent,
        "isDone": false
      }
      this.todosService.addTodo(body).subscribe({
        next: (response) => {
          this.todosService.incrementTodosCount();
          this.todosService.notifyTodoCreated(response.todo);
          // vider le formulaire
          this.form.todoTitle = '';
          this.form.todoContent = '';
          this.submitted = false;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }

  }

  getTodosCount() {
    this.todosService.getAllTodos().subscribe(results => {
    this.todosArray = results;
    this.todosService.getTodosCountService(results.length);
    });
  }

}
