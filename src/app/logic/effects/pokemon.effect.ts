import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {PokemonService} from "../services/pokemon.service";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {errorLoadingPokemons, loadedPokemons, loadPokemons} from "../actions/pokemon.actions";
import {of} from "rxjs";

@Injectable()
export class PokemonEffects {
  /**
   * Once a action of the type loadPokemons appears on the action stream then execute pokemonService getPokemons and start the action loaded Pokemons.
   */
  @Effect() loadPizzas$ = createEffect(() => this.actions$.pipe(
    ofType(loadPokemons),
    mergeMap(() => this.pokemonService.getPokemons()
      .pipe(
        map(movies => (loadedPokemons({payload: movies})),
          catchError(() => errorLoadingPokemons)
        ))
    )
  ));

  /**
   * Creates a new pokemonEffects instance with the stream of actions and the logic PokemonService as dependency.
   * @param actions$ action
   * @param pokemonService dependency.
   */
  constructor(private actions$: Actions, private pokemonService: PokemonService) {
  }

  /**
   *
   mergeMap(() => this.pokemonService.getPokemons().pipe(
   map((pokemons) => {
        console.log("MAP LOADED POKEMEONS: " + pokemons);
        return loadedPokemons({payload: pokemons})
      }),
   catchError(() => {

        console.log("ERROR");
        return errorLoadingPokemons;
      }))));
   */
}
