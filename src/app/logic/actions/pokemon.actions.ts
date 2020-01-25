import {createAction, props} from "@ngrx/store";

export const loadPokemons = createAction("[Pokemons] Load pokemons");
export const loadedPokemons = createAction("[Pokemons] Loaded pokemons", props<{ payload: Array<Pokemon> }>());
export const errorLoadingPokemons = createAction("[Pokemons] Error while loading pokemons");
