import {Action, createReducer, on} from "@ngrx/store";
import {loadedPokemons, loadPokemons} from "../actions/pokemon.actions";

export const scoreboardFeatureKey = "game";

/**
 * State of the holder.
 */
export interface PokemonState {
  pokemons: Pokemon[];
  isLoading: Boolean
}

/**
 * Initializing of the state.
 */
const initialState: PokemonState = {
  pokemons: [],
  isLoading: false
};
/**
 * Creates a new reducer which deals with all available functions.
 */
const pokemonReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => ({
    ...state,
    isLoading: true
  })),
  on(loadedPokemons, (state, {payload}) => ({
    ...state,
    pokemons
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
