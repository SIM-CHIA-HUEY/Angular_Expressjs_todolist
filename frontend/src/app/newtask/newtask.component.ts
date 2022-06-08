import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// ----- API POST 2 : Add a to-do task with service, and in component : -----
import { TodosService } from '../services/todos.service';

// -----  API POST 1 : Add a to-do task very simply without service, only in component with AXIOS : -----
import axios from "axios";

// ----- Use Store + counters and actions files. Objective : to increment each time a todo task is added -----
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  // ----- STORE + reducers and actions files. Objective : to get final state's $count from the Store -----
  // We initialize an empty variable here that'll stock the value from the Store : 
  count$: Observable<number>;

  form: any = {
    todoContent: ''
  };

  isValidForm = true;

  faPlus = faPlus ;

  constructor(
    private todosService: TodosService, 
    private store: Store<{ count: number }>
    ) 
    {
      // ----- STORE : Use with SELECT + store + reducers and actions files. Objective : to get final state's $count from the Store -----
      this.count$ = store.select('count'); 
    }

  ngOnInit(): void {
  }

  // ----- API POST 2 : Add a to-do task with service, and in component : -----
  async submit () {
    if(this.isValidForm) {
      let body = {
        "content": this.form.todoContent,
        "done": "false"
      }
      this.todosService.addTodo(body).subscribe(response =>
        console.log(response)
      )
      window.location.reload();
    }
  }

  // -----  API POST 1 : Add a to-do task very simply without service, only in component with AXIOS : -----
  // async submit () {
  //   if(this.isValidForm) {
  //     await axios.post('http://localhost:5000/api/todos', {
  //       "content": this.form.todoContent,
  //       "done": "false"
  //     })
  //   }
  //   window.location.reload();
  // }

}
