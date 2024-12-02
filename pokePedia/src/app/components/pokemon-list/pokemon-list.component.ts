import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {PokeServiceService} from '@services/poke-service.service'
import { forkJoin,of } from 'rxjs';
import { Pokemon } from './pokemon.model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common'; 
import { PokeDialogComponent } from '../poke-dialog/poke-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchPokemonsComponent } from '../search-pokemons/search-pokemons.component';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    MatListModule,
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule,
    SearchPokemonsComponent,
    MatIconModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})

//const pokemonDataList:Pokemon[]=[];
export class PokemonListComponent implements OnInit, AfterViewInit {
  pokemonsList: Pokemon[] =[];

  displayedColumns: string[] = ['sprites','name', 'base_experience', 'actions'];
  dataSource = new MatTableDataSource<Pokemon>(this.pokemonsList);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

  constructor(
    private pokeService:PokeServiceService,
    public detailsDialog:MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void{
    this.pokeService.getPokes().subscribe(
      (dataPoke:Pokemon[])=>{
        const detailPokemon = dataPoke.map(
          (poke:Pokemon)=>
          this.pokeService.getPokesDetail(poke.url).pipe(
            catchError(error => { 
              console.error('Error al obtener los detalles del Pokémon', error);
               this.showSnackBar("Error in load."); 
               return of(null); 
               })
          )
      );
        // console.log(data);
        forkJoin(detailPokemon).subscribe(
          detailPokemonList=>{
            console.log(detailPokemonList)
            this.dataSource.data=detailPokemonList;
            this.pokemonsList=detailPokemonList;
            this.showSnackBar("information uploaded successfully"); 
          }
          
        )
      }
    )
  }

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  }
  
  filterResults(searchTerm:string):void{
    this.dataSource.filter=searchTerm.trim().toLowerCase();

    if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage(); 
      }

  }
  openDialog(pokeInfo:Pokemon): void{
    const myDialog= this.detailsDialog.open(PokeDialogComponent,{
      width: '150vh',
      data:pokeInfo
    });
    // myDialog.afterClosed().subscribe(result=>{

    // })
  }
  goPage(): void{
    this.router.navigate(['']);
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 3000, 
    horizontalPosition: this.horizontalPosition, 
    verticalPosition: this.verticalPosition 
  }); }
}
