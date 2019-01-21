import {Component, OnInit} from '@angular/core';
import {PokemonService} from './pokemon.service';
import {flatMap, map, mergeMap} from 'rxjs/operators';
import {ConfigService} from './config.service';
import {Config} from './config';
import {PokemonResult} from './pokemon-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'b300098957';
  public config: Config;
  pokemons: PokemonResult;

  constructor(
    private pokemonService: PokemonService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        heroesUrl: data.heroesUrl,
        textfile:  data.textfile
      });

    this.pokemonService.pokemonInit()
      .subscribe( (data: PokemonResult) => this.pokemons = data);
  }

  onNext(): void {
    this.pokemonService.pokemonNext(this.pokemons.next)
      .subscribe( (data: PokemonResult) => this.pokemons = data);
  }

  onPrevious(): void {
    this.pokemonService.pokemonNext(this.pokemons.previous)
      .subscribe( (data: PokemonResult) => this.pokemons = data);
  }

}
