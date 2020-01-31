import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = createFeatureSelector<number>("count");
