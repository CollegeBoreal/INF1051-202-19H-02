import {Component, OnInit} from '@angular/core';
import {PokemonService} from './pokemon.service';
import {map, mergeMap} from 'rxjs/operators';
import {ConfigService} from './config.service';
import {Config} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'b300098957';
  config: Config;
  pokemons: Array<any> = [];

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
  }

}
