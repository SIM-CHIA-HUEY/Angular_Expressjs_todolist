import { createAction } from '@ngrx/store';

// These 3 are very simple actions used with counter.reducer file. Note : Only increment is used, decrement and reset are actions that are not used in the app. 
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');