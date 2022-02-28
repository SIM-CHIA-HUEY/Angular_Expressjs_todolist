import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-get-done-tasks',
  templateUrl: './get-done-tasks.component.html',
  styleUrls: ['./get-done-tasks.component.css']
})
export class GetDoneTasksComponent implements OnInit {

  doneTasksArray: any;
  todosArray: any;
  doneCheck: any;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
    this.getDoneTasks();
  }

  async getDoneTasks() {
    const res = await axios.get('http://localhost:5000/api/done')
    this.doneTasksArray = res.data
    // console.log(this.doneTasksArray)
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
