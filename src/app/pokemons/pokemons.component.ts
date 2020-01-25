import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PokemonFacade} from "../logic/facades/pokemon.facade";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;

  constructor(private _pokemonFacade: PokemonFacade) {
    this.pokemons$ = this._pokemonFacade.waterTypePokemons$
  }

  ngOnInit() {
    this._pokemonFacade.loadAll();
  }
}
