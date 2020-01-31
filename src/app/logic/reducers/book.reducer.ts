import {createReducer, on} from "@ngrx/store";
import {loadedBooks} from "../actions/book.actions";

const initialState: Book[] = [];
const _bookReducer = createReducer(initialState,
  on(loadedBooks, (state, {books}) => books)
);

/**
 * Creates a new book reducer.
 * @param state state.
 * @param action action.
 */
export function bookReducer(state, action) {
  return _bookReducer(state, action);
}
