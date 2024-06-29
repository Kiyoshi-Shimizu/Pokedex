import { Component, OnInit } from "@angular/core";
import { PokemonEntity } from "../../../entities/pokemonEntity";
import { PokemonService } from '../../../../shared/services/pokemon.service';

@Component({
    selector: 'app-pokedex-list',
    standalone: false,
    templateUrl: './pokedex-list.component.html',
    styleUrl: './pokedex-list.component.scss'
  })
  export class PokedexListComponent implements OnInit{
    pokeList: PokemonEntity[] = []
    constructor(private pokeService: PokemonService){}
    ngOnInit(): void {
      this.pokeList = this.pokeService.getPokemons();
    }
  }