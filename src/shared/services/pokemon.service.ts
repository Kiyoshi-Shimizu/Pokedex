import { Injectable } from "@angular/core";
import { pokemons } from "../const/pokeConst";
import { PokemonEntity } from "../../app/entities/pokemonEntity";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    pokemonList: PokemonEntity[] = pokemons;
    public getPokemons() {
        return this.pokemonList;
    }
    public getById(id: number) {
        return this.pokemonList.find(pokemon => pokemon.order === id);
    }
}