
import { Injectable, inject } from "@angular/core";
import { pokemons } from "../const/pokeConst";
import { HttpClient } from "@angular/common/http";
import { StoreService } from "./store.service";
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { PokemonDetailEntity } from "../entities/pokemon/pokemonDetailEntity";
import { PokemonEntity, PokemonAPIResponse } from "../entities/pokemon/pokemonEntity";

const baseUrl: string = "https://pokeapi.co/api/v2/pokemon";
const offset = 150;

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    pokemonList: PokemonEntity[] = pokemons;
    private client = inject(HttpClient);
    private storeService = inject(StoreService);
    //constructor(private client: HttpClient) { }
    public getPokemons(){
        let originales$ = this.client.get<PokemonAPIResponse>(`${baseUrl}?limit=${offset}`);
        let modificados$ = this.storeService.obtenerListaPokemons();

        return originales$.pipe(
        switchMap(originales => 
            modificados$.pipe(
            map(modificados => {
                const urlsModificados = modificados.map(p => p.url);

                // Reemplazar o añadir los elementos de modificados en originales.results
                const resultadosFinales = originales.results.map(original => {
                const modificado = modificados.find(mod => mod.url === original.url);
                return modificado ? modificado : original;
                });

                // Añadir los elementos de modificados que no están en originales.results
                modificados.forEach(modificado => {
                if (!originales.results.some(original => original.url === modificado.url)) {
                    resultadosFinales.push(modificado);
                }
                });

                // Devolver los resultados actualizados
                return { ...originales, results: resultadosFinales };
            })
            )
        )
        );
    }
    public getPokemonDetails(url: string): Observable<PokemonDetailEntity> {
        return this.storeService.obtenerListaPokemons().pipe(
          switchMap(pokemones => {
            // Buscar el Pokémon modificado por URL
            const modificado = pokemones.find(p => p.url === url);
            
            if (modificado) {
              // Si se encuentra un Pokémon modificado, retornarlo
              return of(modificado.detail);
            } else {
              // Si no se encuentra, hacer una llamada HTTP para obtener el Pokémon original
              return this.client.get<PokemonDetailEntity>(url);
            }
          })
        );
      }
    // public getById(id: number): PokemonEntity | undefined {
    //     return this.pokemonList.find(pokemon => pokemon.order === id);
    // }
    public getById(id: number): Observable<PokemonDetailEntity>{
        let modificado$ = this.storeService.obtenerListaPokemons().pipe(
            map(pokemones => {
              let pokemon = pokemones.find(p => p.detail.id === id);
              return pokemon ? pokemon.detail : null;
            })
          );
      
          return modificado$.pipe(
            switchMap(modificado => {
              if (modificado) {
                return of(modificado);
              } else {
                return this.client.get<PokemonDetailEntity>(`${baseUrl}/${id}`);
              }
            })
          );
    }
    public modificarLista(pokemon: PokemonEntity){
        this.getById(pokemon.detail.id).subscribe(pokemonOriginal => {
            if(pokemonOriginal)pokemon.url = `${baseUrl}/${pokemon.detail.id}/`;
            if(!pokemonOriginal){
                this.storeService.obtenerListaPokemons().subscribe(pokemones => {
                    const smallerId = pokemones.length > 0 ? Math.min(...pokemones.map(p => p.detail.id)) : -1;
                    // Asignar un nuevo ID al pokemon a agregar
                    pokemon.detail.id = smallerId <= 0 ? smallerId - 1 : -1;
                })
            }
        });
        this.storeService.modificarLista(pokemon);
    }
    public eliminarModificaciones(){
        this.storeService.eliminarModificaciones();
    }
}