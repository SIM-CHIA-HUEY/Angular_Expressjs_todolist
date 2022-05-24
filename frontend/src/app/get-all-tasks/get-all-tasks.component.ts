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

  count$: Observable<number>;

  faTrash = faTrash;
  todosArray: any;
  doneCheck: any;

  constructor(
    private todosService: TodosService, private store: Store<{ count: number }>) { 
      this.count$ = store.select('count'); 
    }

  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos() {
    this.todosService.getAllTodos().subscribe(data => {
      // console.log(data);
      this.todosArray = data;

      // Use with store to increment +1 on the numbers of todo tasks
      this.todosArray.forEach((element:any) => {
        console.log(element._id)
        this.store.dispatch(increment());

      });
    })


  }
  // Fetch all to-dos without service, only in component : 
  // async getTodos() {
  //   const res = await axios.get('http://localhost:5000/api/todos')
  //   this.todosArray = res.data
  // }

  // increment() {
  //   this.store.dispatch(increment());
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
