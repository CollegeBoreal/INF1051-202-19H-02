import {Pokemon} from './pokemon';

export interface PokemonResult {
  count: Number;
  previous: String;
  next: String;
  results: Pokemon[];
}
