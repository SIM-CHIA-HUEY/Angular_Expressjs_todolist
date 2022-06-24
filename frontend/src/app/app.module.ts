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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasklistComponent,
    NewtaskComponent,
    GetAllTasksComponent,
    GetDoneTasksComponent,
    GetTodoTasksComponent,
    TodosComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      FontAwesomeModule,
      HttpClientModule,
      MatTabsModule,
      BrowserAnimationsModule,
      StoreModule.forRoot({
      }),
  ],
  providers: [],
  // declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }