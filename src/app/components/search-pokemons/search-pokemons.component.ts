import { Component, EventEmitter,output,Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-search-pokemons',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule],
  templateUrl: './search-pokemons.component.html',
  styleUrl: './search-pokemons.component.css'
})
export class SearchPokemonsComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event:Event):void{
    const searchTermm = (event.target as HTMLInputElement).value;

    this.searchEvent.emit(searchTermm.trim().toLowerCase());
  }
}