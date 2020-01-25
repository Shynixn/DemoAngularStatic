import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './app.effects';
import { PokemonsComponent } from './pokemons/pokemons.component';
import {reducer} from "./logic/reducers/pokemon.reducers";
import {PokemonFacade} from "./logic/facades/pokemon.facade";

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ pokemon : reducer}),
    EffectsModule.forRoot([AppEffects]),
  ],
  bootstrap: [AppComponent],
  providers: [PokemonFacade]
})
export class AppModule { }
