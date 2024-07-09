import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { PokemonEntity } from '../entities/pokemon/pokemonEntity';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private pokemones = new BehaviorSubject<PokemonEntity[]>([]);
  pokemones$ = this.pokemones.asObservable();
  constructor() { }
  public obtenerListaPokemons() : Observable<PokemonEntity[]>{
    return this.pokemones$.pipe(take(1));
  
  }
  public modificarLista(pokemon: PokemonEntity){
    this.obtenerListaPokemons().subscribe(pokemones => {
      let existe = pokemones.filter(p => p.url === pokemon.url).length > 0;
      let nuevaLista = existe ? this.actualizarModificacion(pokemones, pokemon) : this.agregarModificacion(pokemones, pokemon);
      this.pokemones.next(nuevaLista);
    });
  }
  private actualizarModificacion(pokemones: PokemonEntity[], pokemon: PokemonEntity) : PokemonEntity[] {
    const index = pokemones.findIndex(p => p.url === pokemon.url);
    if(index < 0) throw new Error('Pokemon no encontrado');
    pokemones[index] = pokemon;
    return pokemones;
  }
  private agregarModificacion(pokemones: PokemonEntity[], pokemon: PokemonEntity) : PokemonEntity[] {
    pokemones.push(pokemon);
    return pokemones;
  }
  public eliminarModificaciones(){
    this.pokemones.next([]);
  }
}
