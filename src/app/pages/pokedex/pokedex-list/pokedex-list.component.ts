import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { PokemonEntity } from "../../../entities/pokemonEntity";
import { PokemonService } from '../../../../shared/services/pokemon.service';
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, map } from "rxjs";

@Component({
    selector: 'app-pokedex-list',
    standalone: false,
    templateUrl: './pokedex-list.component.html',
    styleUrl: './pokedex-list.component.scss'
  })
  export class PokedexListComponent implements OnInit{
    pokeList: PokemonEntity[] = []
    filterValue: string = '';
    @ViewChild('autofocus') autofocus: ElementRef | undefined;
    constructor(private pokeService: PokemonService, private router: Router, private route: ActivatedRoute){}
    ngOnInit(): void {
      this.getPokemons();
    }
    getPokemons(){
      // this.pokeService.getPokemons().subscribe(response => {
      //   response.results.forEach((pokemon: any) => {
      //     this.pokeService.getPokemonDetails(pokemon.url).subscribe((data: any) => {
      //       pokemon.detail = data;
      //     });
      //   });
      //   this.pokeList = response.results;
      // }, err => {
      //   console.log(err);
      //   return [];
      // });

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
  }