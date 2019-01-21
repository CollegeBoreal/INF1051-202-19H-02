import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PokemonResult} from './pokemon-result';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {  }

  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  pokemonInit(): Observable<PokemonResult> {
    return this.http.get<PokemonResult>(this.pokemonUrl );
  }

  pokemonNext(url: string): Observable<PokemonResult> {
    return this.http.get<PokemonResult>(url);
  }
}
