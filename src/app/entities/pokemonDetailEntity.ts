import { Ability } from "./ability";
import { Mfe } from "./mfe";
import { Sprite } from "./sprite";
import { Type } from "./type";

export interface PokemonDetailEntity{
    abilities: Ability[];
    height: number;
    id: number;
    moves: Mfe[];
    sprites: Sprite;
    types: Type[];
    weight: number;
    name: string;
    order: number;
}