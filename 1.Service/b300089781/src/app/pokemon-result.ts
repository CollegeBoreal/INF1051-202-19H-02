import {Pokemon} from './pokemon';

export interface PokemonResult {
count: number;
previous: string;
next: string;
results: Pokemon[];
}
