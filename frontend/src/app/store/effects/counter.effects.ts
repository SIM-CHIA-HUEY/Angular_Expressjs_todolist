import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { sumAllTodos, sumAllTodosSuccess, sumAllTodosFailure } from '../actions/counter.actions';
import { TodosService } from '../../services/todos.service';

@Injectable()
export class ApplicationEffects {

    constructor(
        private actions$: Actions,
        private todosApiService: TodosService
      ) {}

      sumAllTodos$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(sumAllTodos),
        switchMap((actions: any) => {
          return this.todosApiService.getAllTodos()
            .pipe(
              map((results) => {
                // count items in the results
                return sumAllTodosSuccess();
              }),
              catchError(() => of(sumAllTodosFailure()))
            );
        })
      ));

}