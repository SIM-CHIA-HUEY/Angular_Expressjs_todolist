import { Component } from '@angular/core';
import {NewtaskComponent}from './newtask/newtask.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'My to-dos list';
}
