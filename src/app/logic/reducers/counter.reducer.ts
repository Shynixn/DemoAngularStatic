import {createReducer, on} from "@ngrx/store";
import {decrement, increment, realIncrement, reset} from "../actions/counter.actions";

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(realIncrement, (state, {value}) => state + value),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
