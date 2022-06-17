import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasklistComponent } from './right/tasklist/tasklist.component';
import { NewtaskComponent } from './left/newtask/newtask.component';
import { GetAllTasksComponent } from './right/get-all-tasks/get-all-tasks.component';
import { GetDoneTasksComponent } from './right/get-done-tasks/get-done-tasks.component';
import { GetTodoTasksComponent } from './right/get-todo-tasks/get-todo-tasks.component';
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasklistComponent,
    NewtaskComponent,
    GetAllTasksComponent,
    GetDoneTasksComponent,
    GetTodoTasksComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      FontAwesomeModule,
      HttpClientModule,
      StoreModule.forRoot({
      }),
  ],
  providers: [],
  // declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
