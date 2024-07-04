import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { PokemonEntity } from "../../../entities/pokemonEntity";
import { PokemonService } from '../../../../shared/services/pokemon.service';
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, concatMap, forkJoin, map, mergeMap } from "rxjs";

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
    // OPCION 1: HACER ITERACIONES DE PETICIONES HTTP POR CADA ELEMENTO:
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

    // OPCION 2: HACER UNA SOLA PETICION HTTP Y ESPERAR A QUE TODAS LAS PETICIONES DE DETALLES SE RESUELVAN:
    this.pokeService.getPokemons().pipe(
      map(response => {
          response.results.map((pokemon: any) => {
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


    // OPCION 3: HACER UNA SOLA PETICION HTTP Y ESPERAR A QUE TODAS LAS PETICIONES DE DETALLES SE RESUELVAN USANDO forkJoin:
    // this.pokeService.getPokemons().pipe(
    //   mergeMap(response => {
    //     const pokemonRequests = response.results.map((pokemon: any) => {
    //       return this.pokeService.getPokemonDetails(pokemon.url);
    //     });
    //     return forkJoin(pokemonRequests).pipe(
    //       map(details => {
    //         response.results.forEach((pokemon: any, index: number) => {
    //           pokemon.detail = details[index];
    //         });
    //         return response.results;
    //       })
    //     );
    //   }),
    //   catchError(err => {
    //     console.log(err);
    //     return [];
    //   })
    // ).subscribe(pokeList => {
    //   this.pokeList = pokeList;
    // });

          

          
  }

}