import { Injectable, inject } from "@angular/core";
import { pokemons } from "../const/pokeConst";
import { PokemonAPIResponse, PokemonEntity } from "../../app/entities/pokemonEntity";
import { HttpClient } from "@angular/common/http";
import { PokemonDetailEntity } from "../../app/entities/pokemonDetailEntity";

const baseUrl: string = "https://pokeapi.co/api/v2/pokemon";
const offset = 150;

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    pokemonList: PokemonEntity[] = pokemons;
    private client = inject(HttpClient);
    //constructor(private client: HttpClient) { }
    public getPokemons(){
        return this.client.get<PokemonAPIResponse>(`${baseUrl}?limit=${offset}`);
    }
    public getPokemonDetails(url:string){
        return this.client.get<PokemonDetailEntity>(url);
    }
    // public getById(id: number): PokemonEntity | undefined {
    //     return this.pokemonList.find(pokemon => pokemon.order === id);
    // }
    public getById(id: number) {
        return this.client.get<PokemonDetailEntity>(`${baseUrl}/${id}`);
    }
}