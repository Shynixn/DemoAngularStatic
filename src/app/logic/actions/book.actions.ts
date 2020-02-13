import {createAction, props} from "@ngrx/store";

/**
 * Requests to load all books from the given offSet and limit.
 */
export const loadBooks = createAction("[Books] loading", props<{ offset: number, limit: number }>());
/**
 * Notifies that a stream of books has been loaded.
 */
export const loadedBooks = createAction("[Books] loaded", props<{ books: Book[] }>());
/**
 * Requests to load the google books for the given query.
 */
export const loadGoogleBooks = createAction("[Books] google loading", props<{ query: string }>());
/**
 * Notifies that a stream of Google books has been loaded.
 */
export const loadedGoogleBooks = createAction("[Books] google loaded", props<{ books: Book[] }>());
