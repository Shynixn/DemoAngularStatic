import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {PokemonState} from "../reducers/pokemon.reducers";
import {loadPokemons} from "../actions/pokemon.actions";
import {pokemonQuery} from "../selectors/pokemon.selector";

@Injectable()
export class PokemonFacade {
  /**
   * Property to define a pipe to the selectors of all pokemon.
   */
  waterTypePokemons$ = this.store.pipe(select(pokemonQuery.getAllPokemons));

  /**
   * Creates a new instance of the PokemonFacade with the store as dependecy.
   * @param store dependency.
   */
  constructor(private store: Store<PokemonState>) {
  }

  /**
   * Requests to start loading of pokemons.
   */
  loadAll() {
    this.store.dispatch(loadPokemons())
  }
}
