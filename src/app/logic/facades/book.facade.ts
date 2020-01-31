import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {loadBooks} from "../actions/book.actions";
import {allBooks} from "../selectors/book.selector";

@Injectable()
export class BookFacade {
  /**
   * Books state.
   */
  books$: Observable<Book[]>;

  /**
   * Creates a new instance of the book facade with store as dependency.
   * @param store store.
   */
  constructor(private store: Store<Book[]>) {
    this.books$ = store.pipe(select(allBooks));
  }

  /**
   * Refreshes books from the server.
   */
  loadBooks() {
    console.log("Load books");
    this.store.dispatch(loadBooks({limit: 100, offset: 0}))
  }
}
