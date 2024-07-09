import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonEntity } from './../../../../shared/entities/pokemon/pokemonEntity';
import { Router, ActivatedRoute } from '@angular/router';
import { map, catchError } from 'rxjs';
import { PokemonService } from '../../../../shared/services/pokemon.service';
import { SharedModule } from "../../../../shared/shared.module";

@Component({
    selector: 'app-pokemon-manage',
    standalone: true,
    templateUrl: './pokemon-manage.component.html',
    styleUrl: './pokemon-manage.component.scss',
    imports: [SharedModule]
})
export class PokemonManageComponent {
  pokeList: PokemonEntity[] = []
  filterValue: string = '';
  @ViewChild('autofocus') autofocus: ElementRef | undefined;
  constructor(private pokeService: PokemonService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons(){
    this.pokeService.getPokemons().pipe(
      map(response => {
          response.results.forEach((pokemon: any) => {
              this.pokeService.getPokemonDetails(pokemon.url).subscribe((data: any) => {
                  pokemon.detail = data;
              });
          });
          return response.results;
      }),
      catchError(err => {
          console.log(err);
          return [];
      })
    ).subscribe(pokeList => {
        this.pokeList = pokeList;
    });
  }
  openDetail(id: number){
    this.router.navigate(['details', id], {relativeTo: this.route});
  }
  filterExpression(event:string){
    this.filterValue = event;
  }
  editPokemon(id: number){
    this.router.navigate(['manage-pokemon', id]);
  }
  addPokemon() {
    this.router.navigate(['manage-pokemon', 0]);
  }
  revertChanges(){
    this.pokeService.eliminarModificaciones();
    this.getPokemons();
  }
}
