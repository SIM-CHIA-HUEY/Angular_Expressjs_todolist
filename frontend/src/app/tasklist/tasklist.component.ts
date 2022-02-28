import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  id: any = "all";

  constructor() { }

  ngOnInit(): void {
  }

  tabChange(ids: string) {
    console.log(ids);
      this.id = ids;
  }
}
