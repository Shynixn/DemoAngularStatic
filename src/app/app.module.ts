import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontPageSearchComponent } from './front-page-search/front-page-search.component';
import { FrontPageDescriptionComponent } from './front-page-description/front-page-description.component';
import { FooterComponent } from './footer/footer.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListItemComponent } from './item-list-item/item-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    NavbarComponent,
    FrontPageSearchComponent,
    FrontPageDescriptionComponent,
    FooterComponent,
    ItemListComponent,
    ItemListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({count: counterReducer, bookStore: bookReducer}),
    EffectsModule.forRoot([AppEffects, BookEffects, CounterEffects]),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [BookService, BookFacade, CounterFacade, CounterService
  ]
})
export class AppModule {
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/lang/", ".json");
}
