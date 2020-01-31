import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BookFacade} from "../logic/facades/book.facade";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  /**
   * Book property.
   */
  books: Observable<Book[]>;

  /**
   * Creates a new instance of the component with the bookFacade as dependency.
   * @param facade facade.
   */
  constructor(private facade: BookFacade) {
    this.books = facade.books$;
  }

  /**
   * On init.
   */
  ngOnInit(): void {
    this.facade.loadBooks()
  }
}
