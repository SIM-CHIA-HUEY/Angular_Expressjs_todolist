import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '',   component: TodosComponent, pathMatch: 'full' },
  // { path: 'todos/:id', component: TodoDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
      