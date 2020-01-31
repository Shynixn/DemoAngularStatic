import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PokemonState} from "../reducers/pokemon.reducers";

export const pokemonState = createFeatureSelector("storedPokemonState");
export const selectAllBooks = createSelector(
   pokemonState,
  (state: PokemonState) => state.pokemons
);
