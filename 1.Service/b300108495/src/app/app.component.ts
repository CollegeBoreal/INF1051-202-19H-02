import {Component, OnInit} from '@angular/core';
import {PokemonService} from './pokemon.service';
import {map, mergeMap} from 'rxjs/operators';
import {ConfigService} from './config.service';
import {Config} from './config';
import {Pokemon} from './pokemon';
import {PokemonResult} from './pokemon-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'b300098957';
  config: Config;
  pokemons: PokemonResult ;

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
      .subscribe((data: PokemonResult) => this.pokemons = data);
  }

}
