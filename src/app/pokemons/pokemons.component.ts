import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {decrement, increment, reset} from "../logic/actions/counter.actions";
import {CounterFacade} from "../logic/facades/counter.facade";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  count$: Observable<number>;

  constructor(private facade : CounterFacade) {
    this.count$ = facade.count$;
  }

  increment() {
    this.facade.increment();
  }

  decrement() {
    this.facade.decrement();
  }

  reset() {
    this.facade.reset();
  }

  ngOnInit(): void {
  }
}
