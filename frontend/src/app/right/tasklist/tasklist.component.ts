import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  // id: string = "all";
  tab = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.tab == 0) {
      this.tab = 1;
    }
    // this.tabChange("todo");
  }

  // tabChange(ids: string) {
  //   // console.log(ids);
  //     this.id = ids;
  // }
}
