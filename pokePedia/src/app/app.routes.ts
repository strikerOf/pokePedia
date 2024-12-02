import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/pokeHome', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'pokeList', component: PokemonListComponent },
];
