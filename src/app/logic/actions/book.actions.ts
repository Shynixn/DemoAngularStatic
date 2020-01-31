import {createAction, props} from "@ngrx/store";

/**
 * Requests to load all books from the given offSet and limit.
 */
export const loadBooks = createAction("[Books] loading", props<{ offset: number, limit: number }>());
/**
 * Notifies that a stream of books has been loaded.
 */
export const loadedBooks = createAction("[Books] loaded", props<{ books: Book[] }>());
