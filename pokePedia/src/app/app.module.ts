import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";
import { HomeComponent } from "./components/home/home.component";
import { AppRoutingModule } from './app-routing.module';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonListComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule, 
    MatTableModule,
    MatPaginator,
    MatTableDataSource,
    MatInputModule,
    MatFormFieldModule
],
  providers: [],
  bootstrap: [
    AppComponent
]
})
export class AppModule {}