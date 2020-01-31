import {createFeatureSelector} from "@ngrx/store";

/**
 * Contains all loaded books.
 */
export const allBooks = createFeatureSelector<Book[]>("bookStore");
