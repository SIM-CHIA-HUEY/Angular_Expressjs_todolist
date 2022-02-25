import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-get-all-tasks',
  templateUrl: './get-all-tasks.component.html',
  styleUrls: ['./get-all-tasks.component.css']
})
export class GetAllTasksComponent implements OnInit {

  todosArray: any;
  // allTodos: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos() {
    const res = await axios.get('http://localhost:5000/api/todos')
    this.todosArray = res.data
    console.log(this.todosArray)
    // let i;
    // for (i = 0; i < this.todosArray.length; i++) {
    //   console.log(this.todosArray[i])
    //   // this.allTodos.push(this.todosArray[i])
    // }
    // console.log(this.todosArray)

    // fetch("http://localhost:5000/api/todos")
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  }

}
