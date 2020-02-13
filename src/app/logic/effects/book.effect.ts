import {Injectable} from "@angular/core";
import {act, Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {loadBooks, loadedBooks, loadGoogleBooks} from "../actions/book.actions";
import {BookService} from "../services/book.service";

@Injectable()
export class BookEffects {
  /**
   * Once a action of the type loadPokemons appears on the action stream then execute pokemonService getPokemons and start the action loaded Pokemons.
   */
  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(loadBooks),
    mergeMap(() => this.bookService.getBooks()
      .pipe(
        map(books => {
          console.log("GOT " + books);
          return loadedBooks({books: books})
        }),
        catchError((e) => {
          console.log("ERROR" + e)
          return EMPTY;
        })
      ))
  ));

  /**
   * Once a action of the type loadPokemons appears on the action stream then execute pokemonService getPokemons and start the action loaded Pokemons.
   */
  loadGoogleBooks$ = createEffect(() => this.actions$.pipe(
    ofType(loadGoogleBooks),
    mergeMap((action) => this.bookService.getGoogleBooks(action.query)
      .pipe(
        map(books => {
          console.log("GOT " + JSON.stringify(books));
          return loadedBooks({books: books})
        }),
        catchError((e) => {
          console.log("ERROR" + e)
          return EMPTY;
        })
      ))
  ));

  /**
   * Creates a new book effects instance with dependencies.
   * @param actions$ dependency.
   * @param bookService dependency.
   */
  constructor(private actions$: Actions, private bookService: BookService) {
  }
}
