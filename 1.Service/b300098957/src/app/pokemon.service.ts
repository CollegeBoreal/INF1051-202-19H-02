import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {  }

  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  pokemonInit() {
    return this.http.get(this.pokemonUrl );
  }
}
