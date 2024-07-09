import { pokemons } from './../../../../shared/const/pokeConst';
import { Component, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonEntity } from './../../../../shared/entities/pokemon/pokemonEntity';

@Component({
  selector: 'app-pokemon-card',
  standalone: false,
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  pokemon = input.required<PokemonEntity>();
  constructor(private router: Router, private route: ActivatedRoute){}
  openDetail(id: number){
    this.router.navigate(['details', id]);
  }
}
