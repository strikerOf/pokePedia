import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  private urlApi = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}
  // peticion :) 
  getPokes(): Observable<any[]>{
    return this.http.get<any>(this.urlApi).pipe(
      map(response => response.results),
      catchError((error) => {
      return throwError(() => error);
    })
    )
    
  }
  getPokesDetail(urlDetail:string): Observable<any>{
    return this.http.get(urlDetail).pipe(
      catchError((error) => {
      return throwError(() => error);
    })
  )
    
  }

}
