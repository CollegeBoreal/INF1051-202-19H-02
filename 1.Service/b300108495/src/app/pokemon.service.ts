import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonResult} from './pokemon-result';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {  }

  pokemonUrl = 'https://pokeapi.co/api/v2/evolution-chain/?limit=150';

  pokemonInit(): Observable<PokemonResult> {
    return this.http.get<PokemonResult>(this.pokemonUrl );
  }
}
