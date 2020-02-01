import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BookFacade} from "../logic/facades/book.facade";
import {FormBuilder, FormGroup} from "@angular/forms";

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
   * searchForm property.
   */
  searchForm: FormGroup;

  /**
   * Creates a new instance of the component with the bookFacade as dependency.
   * @param facade facade.
   * @param formBuilder
   */
  constructor(private facade: BookFacade, private formBuilder: FormBuilder) {
    this.books = facade.books$;
    this.searchForm = this.formBuilder.group({
      queryText: "",
    });
  }

  onSubmit(payload) {
    console.log("Submit" + JSON.stringify(payload))
  }

  /**
   * On init.
   */
  ngOnInit(): void {
    this.facade.loadBooks()
  }
}
