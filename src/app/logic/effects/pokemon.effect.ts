import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {PokemonService} from "../services/pokemon.service";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {errorLoadingPokemons, loadedPokemons, loadPokemons} from "../actions/pokemon.actions";

@Injectable()
export class PokemonEffects {
  /**
   * Once a action of the type loadPokemons appears on the action stream then execute pokemonService getPokemons and start the action loaded Pokemons.
   */
  @Effect() loadPizzas$ = this.actions$.pipe(
    ofType(loadPokemons),
    mergeMap(() => this.pokemonService.getPokemons().pipe(
      map((pokemons) => loadedPokemons({payload: pokemons})),
      catchError(() => errorLoadingPokemons))));

  /**
   * Creates a new pokemonEffects instance with the stream of actions and the logic PokemonService as dependency.
   * @param actions$ action
   * @param pokemonService dependency.
   */
  constructor(private actions$: Actions, private pokemonService: PokemonService) {
  }
}
