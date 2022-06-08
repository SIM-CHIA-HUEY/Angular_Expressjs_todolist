import { createAction, createReducer, on, props } from '@ngrx/store';

import { loadTodoList, addTodo, removeTodo  } from '../todo.actions';
import { Todo } from '../models/todo.model';

// Each reducer function is a listener of actions

// INTERFACE = TYPE, juste pour decrire le type !
export interface State { // creer interface bcos typed language, more logic
  todos: Todo[] ; //definir tableau qui contient des todos
  toto ?: boolean; // props pas obligatoire = champs pas obligatoire
}

// ----- 1. Set the initial state with defaults for your required state properties -----
// Create and export a variable to capture the initial state with one or more default values.

export const initialState: State = { // this variable qui a pour type State
  todos : [],
};
// on cree initialState, et initialiser les champs/l'objet d'initialState (ou propriete de l'interface)

// enum : sexe - masc/fem

// effect says success, reducer traite l'action success -> ajouter new tache dans le store 


// This is a reducer function to handle the retrieval of todo list from the state and consequently, update the state.
export const loadTodoListReducer = createReducer(
  initialState,
  on(loadTodoList, (state, { todos }) => todos)
);




// EXAMPLE : 
const scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  // type d'action, les fonctions sur le State ({dont algo sur les proprietes d'action})
  on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
  on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);
// ici je fais on(LoadSuccess)... / on(LoadFailed)...
// Puis les load todo/create todo, where you'll make api call, you do them in effects.
// => actions -> effects -> back to reducer and sent state+data to STORE before dispatching to all the app

export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}

// Make Selectors like in Vesta 
