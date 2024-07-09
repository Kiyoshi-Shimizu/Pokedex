import { PokemonDetailEntity } from "./pokemonDetailEntity";

export interface PokemonEntity {
    name: string;
    url: string | undefined;
    detail: PokemonDetailEntity;
}
export interface PokemonAPIResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonEntity[];
}