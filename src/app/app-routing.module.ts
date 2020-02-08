import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsComponent} from "./pokemons/pokemons.component";
import {PageHomeComponent} from "./page-home/page-home.component";
import {PageCollectionComponent} from "./page-collection/page-collection.component";


const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'collection', component : PageCollectionComponent},
  { path: 'pokemon', component: PokemonsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
