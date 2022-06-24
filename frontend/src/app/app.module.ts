import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewtaskComponent } from './newtask/newtask.component';
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
    NewtaskComponent,
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