import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { TodoPayload } from './models/todo.model';
import { TodosService } from './services/todos.service';
import {
    loadTodoList
} from './todo.actions';

@Injectable()
export class ApplicationEffects {

  constructor(
    private actions$: Actions,
    private applicationsApiService: TodosService
  ) {}

  loadTodoList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(loadTodoList),
    switchMap((actions: any) => {
      return this.applicationsApiService.getAllTodos()
        .pipe(
          map((app: App) => {
            const engageApp: TodoPayload = {
              id: app.name,
              content: app.desc,
              done: app.services
            };
            return loadTodoListSuccess({ payload: engageApp });
          }),
          catchError((error) => of(LoadFailure(error)))
        );
    })
  ));

}


