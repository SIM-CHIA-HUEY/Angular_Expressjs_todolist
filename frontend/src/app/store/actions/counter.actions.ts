import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const sumAllTodos = createAction('[Counter Componenent] Sum up all todos')
export const sumAllTodosSuccess = createAction('[Counter Componenent] Sum up all todos')
export const sumAllTodosFailure = createAction('[Counter Componenent] Sum up all todos')
