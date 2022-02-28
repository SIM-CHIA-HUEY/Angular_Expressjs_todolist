import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { faPlus } from '@fortawesome/free-solid-svg-icons';


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

  faPlus = faPlus ;

  constructor() { }

  ngOnInit(): void {
  }

  async submit () {
    if(this.isValidForm) {
      await axios.post('http://localhost:5000/api/todos', {
        "content": this.form.todoContent,
        "done": "false"
      })
    }
    window.location.reload();

  }


}
