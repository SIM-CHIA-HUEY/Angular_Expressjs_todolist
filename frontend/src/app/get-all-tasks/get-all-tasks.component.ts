import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-get-all-tasks',
  templateUrl: './get-all-tasks.component.html',
  styleUrls: ['./get-all-tasks.component.css']
})
export class GetAllTasksComponent implements OnInit {

  todosArray: any;
  doneCheck: any;

  constructor() { }

  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos() {
    const res = await axios.get('http://localhost:5000/api/todos')
    this.todosArray = res.data
  }

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
