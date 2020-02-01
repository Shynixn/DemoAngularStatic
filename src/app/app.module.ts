import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppEffects} from './app.effects';
import {PokemonsComponent} from './pokemons/pokemons.component';
import {counterReducer} from "./logic/reducers/counter.reducer";
import {CounterFacade} from "./logic/facades/counter.facade";
import {CounterService} from "./logic/services/counter.service";
import {CounterEffects} from "./logic/effects/counter.effect";
import {BookService} from "./logic/services/book.service";
import {BookFacade} from "./logic/facades/book.facade";
import {BookEffects} from "./logic/effects/book.effect";
import {bookReducer} from "./logic/reducers/book.reducer";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExampleInterceptor} from "./app.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";
import {StaticService} from "./logic/services/staticpage.service";

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({count: counterReducer, bookStore: bookReducer}),
    EffectsModule.forRoot([AppEffects, BookEffects, CounterEffects]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  bootstrap: [AppComponent],
  providers: [BookService, BookFacade, CounterFacade, CounterService, StaticService,
    {provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptor, multi: true}
  ]
})
export class AppModule {
}
