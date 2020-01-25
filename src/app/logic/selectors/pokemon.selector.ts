import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PokemonState} from "../reducers/pokemon.reducers";

const getPokemonState = createFeatureSelector<PokemonState>("pokemonState");
const getAllPokemons = createSelector(
  getPokemonState,
  (state: PokemonState) => state.pokemons
);
export const pokemonQuery = {
  getAllPokemons
};
