import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { TodosService } from '../services/todos.service';

import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-get-all-tasks',
  templateUrl: './get-all-tasks.component.html',
  styleUrls: ['./get-all-tasks.component.css']
})

export class GetAllTasksComponent implements OnInit {

  // ----- STORE + reducers and actions files. Objective : to get final state's $count from the Store -----
  // We initialize an empty variable here that'll stock the value from the Store : 
  count$: Observable<number>;

  faTrash = faTrash;
  todosArray: any;
  doneCheck: any;

  constructor(
    private todosService: TodosService, 
    private store: Store<{ count: number }>
    ) 
    { 
    // ----- STORE : Use with SELECT + store + reducers and actions files. Objective : to get final state's $count from the Store -----
      this.count$ = store.select('count'); 
    }

  ngOnInit(): void {
    this.getTodos();
  }

  // ----- API GET 2 : Fetch all to-dos with service, and in component : -----
  async getTodos() {
    this.todosService.getAllTodos().subscribe(data => {
      this.todosArray = data;

      // ----- STORE : Use with DISPATCH + store + counters and actions files. Objective : to increment $count each time a todo task is added -----
      this.todosArray.forEach((element:any) => {
        console.log(element._id)
        this.store.dispatch(increment());
      });
    })

  }

  // ----- API GET 1 : Fetch all to-dos without service, only in component with AXIOS : -----
  // async getTodos() {
  //   const res = await axios.get('http://localhost:5000/api/todos')
  //   this.todosArray = res.data
  // }

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
