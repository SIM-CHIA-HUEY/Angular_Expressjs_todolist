import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  form: any = {
    todoContent: ''
  };

  isValidForm = true;


  constructor() { }

  ngOnInit(): void {
  }

  submit () {
    if(this.isValidForm) {
      // console.log(this.form);
      axios.post('http://localhost:5000/api/todos', {
        "content": this.form.todoContent,
        "done": "false"
      })

    }
    window.location.reload();

  }

  // async createTodo () {
  //   await axios.post('http://localhost:5000/api/todos', {
  //     "content": this.form.todoContent,
  //     "done": "false"
  //   })
  // }

}
