import {createAction, props} from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment', props<{ header: string }>());
export const realIncrement = createAction('[Counter Component] Real increment', props<{ value : number }>());

export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
