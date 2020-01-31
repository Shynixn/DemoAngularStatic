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
import {PokemonEffects} from "./logic/effects/pokemon.effect";
import {PokemonService} from "./logic/services/pokemon.service";
import {counterReducer} from "./logic/reducers/counter.reducer";
import {CounterFacade} from "./logic/facades/counter.facade";
import {CounterService} from "./logic/services/counter.service";
import {CounterEffects} from "./logic/effects/counter.effect";

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([AppEffects, PokemonEffects, CounterEffects]),
  ],
  bootstrap: [AppComponent],
  providers: [PokemonService, CounterFacade, CounterService]
})
export class AppModule { }
