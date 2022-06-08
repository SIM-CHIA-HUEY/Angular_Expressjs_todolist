import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

export const initialState = 0;

// Define a reducer function to handle changes in the counter value based on the provided actions. (from NGRX Getting started-Tutorial)
// This one is very simple incrementation used with counter.actions file. Note : decrement and reset are actions that are not used in the app. 
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

