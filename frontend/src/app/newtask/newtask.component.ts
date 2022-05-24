import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { TodosService } from '../services/todos.service';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  count$: Observable<number>;

  form: any = {
    todoContent: ''
  };

  isValidForm = true;

  faPlus = faPlus ;

  constructor(private todosService: TodosService, private store: Store<{ count: number }>) {
    this.count$ = store.select('count'); 
  }

  ngOnInit(): void {
  }

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
  // Add to-do without service, only in component : 
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
