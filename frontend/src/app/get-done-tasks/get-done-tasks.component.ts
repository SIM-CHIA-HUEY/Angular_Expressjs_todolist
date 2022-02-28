import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-get-done-tasks',
  templateUrl: './get-done-tasks.component.html',
  styleUrls: ['./get-done-tasks.component.css']
})
export class GetDoneTasksComponent implements OnInit {

  doneTasksArray: any;

  constructor() { }

  ngOnInit(): void {
    this.getDoneTasks();
  }

  async getDoneTasks() {
    const res = await axios.get('http://localhost:5000/api/done')
    this.doneTasksArray = res.data
    // console.log(this.doneTasksArray)
  }

}
