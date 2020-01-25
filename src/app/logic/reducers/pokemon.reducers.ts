import {Action, createReducer, on} from "@ngrx/store";
import {loadedPokemons} from "../actions/pokemon.actions";

/**
 * State of the holder.
 */
export interface PokemonState {
  pokemons: Pokemon[];
}

/**
 * Initializing of the state.
 */
const initialState: PokemonState = {
  pokemons: []
};
/**
 * Creates a new reducer which deals with all available functions.
 */
const pokemonReducer = createReducer(
  initialState,
  on(loadedPokemons, (state, {payload}) => ({
    ...state,
    pokemons: payload
  }))
);

/**
 * Reducer implementation.
 * @param state of the current ui.
 * @param action to take.
 */
export function reducer(state: PokemonState | undefined, action: Action) {
  return pokemonReducer(state, action)
}
