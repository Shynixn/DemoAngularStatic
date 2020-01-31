import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {CounterService} from "../services/counter.service";
import {increment, realIncrement} from "../actions/counter.actions";
import {EMPTY} from "rxjs";

@Injectable()
export class CounterEffects {
  /**
   * Once a action of the type loadPokemons appears on the action stream then execute pokemonService getPokemons and start the action loaded Pokemons.
   */
  loadPizzas$ = createEffect(() => this.actions$.pipe(
    ofType(increment),
  mergeMap(() => this.counterService.getAddAmount("sd")
    .pipe(
      map(movies => {
        console.log("GOT " + movies);

        return realIncrement({value: movies})
      }),
      catchError(() => EMPTY)
    ))
  ));

  /**
   * Creates a new pokemonEffects instance with the stream of actions and the logic PokemonService as dependency.
   * @param actions$ action
   */
  constructor(private actions$: Actions, private counterService : CounterService) {
  }
}
