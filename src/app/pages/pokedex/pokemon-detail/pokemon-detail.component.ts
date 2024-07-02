import { Component, OnInit } from '@angular/core';
import { PokemonEntity } from '../../../entities/pokemonEntity';
import { PokemonService } from '../../../../shared/services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{
  pokemon: PokemonEntity | undefined = undefined;
  constructor(private pokeService: PokemonService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params['id']) {
        let id = parseInt(params['id']);
        this.pokeService.getById(id).subscribe((data: any) => {
          this.pokemon = {name: data.name, url: data.url, detail: data};
          if (this.pokemon === undefined) this.router.navigate(['../']);
        });
      }
    });

  }
}
