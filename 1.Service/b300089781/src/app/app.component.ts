import {Component, OnInit} from '@angular/core';
import {PokemonService} from './pokemon.service';
import {map, mergeMap} from 'rxjs/operators';
import {ConfigService} from './config.service';
import {Config} from './config';
import {PokemonResult} from './pokemon-result';
import {Pokemon} from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'b300089781';
  config: Config;
  pokemons: PokemonResult;

  constructor(
    private pokemonService: PokemonService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        heroesUrl: data.heroesUrl,
        textfile: data.textfile
      });

    this.pokemonService.pokemonInit()
      .subscribe((data: PokemonResult) => this.pokemons = data);
  }
  onNext(): void {
    this.pokemonService.pokemonNavigate(this.pokemons.next)
      .subscribe((data: PokemonResult) => this.pokemons = data);
  }
  onPrevious(): void {
    this.pokemonService.pokemonNavigate(this.pokemons.previous)
      .subscribe((data: PokemonResult) => this.pokemons = data);
  }
}
