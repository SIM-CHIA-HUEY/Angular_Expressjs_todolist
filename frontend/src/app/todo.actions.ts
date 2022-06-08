import { createAction, props } from '@ngrx/store';
import { TodoPayload } from './models/todo.model';

// These 3 more complex actions used with todo.reducer + collection.reducer + ... file. 

// evenement lance de n'importe ou dans l'application, avec payload data
//In state manager it's called 1 action = 1 event usually

export const loadTodoList = createAction(
  '[Todo Component] Retrieve Todo Tasks Success',
  props<{ todos: ReadonlyArray<TodoPayload> }>()
);

export const loadTodoListSuccess = createAction(
  '[Todo Component] Retrieve Todo Tasks Success',
  props<{ todos: ReadonlyArray<TodoPayload> }>()
);

export const addTodo = createAction(
    '[Todo Component] Add New Todo Task', // propriete : type de l'action qu'on veut cree, this is a mandatory props !
    props<{ payload: TodoPayload }>() // propriete : type de payload. Each action can have a payload but not mandatory. 
);

export const updateTodo = createAction(
  '[Todo Component] Update Todo Task',
  props<{ payload: TodoPayload }>()
);

export const removeTodo = createAction(
    '[Todo Component] Remove Todo Task',
    props<{ payload: TodoPayload }>()
);
