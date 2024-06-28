import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPokemonType]',
  standalone: false
})
export class PokemonTypeDirective implements OnInit{
  @Input() appPokemonType: string = '';
  @Input() appPokemonType2: string | null = null;
  @HostBinding('style') bgColor: string = 'none';
  typeColors: { [key: string]: string } = {
    normal: '#9199A1',
    fighting: '#CC3E69',
    flying: '#92AADD',
    poison: '#AA6BC7',
    ground: '#DB7545',
    rock: '#C7B687',
    bug: '#92C12D',
    ghost: '#5168A9',
    steel: '#5D8E9F',
    fire: '#FF9C52',
    water: '#4D92D5',
    grass: '#62BC5E',
    electric: '#F6D03B',
    psychic: '#F86F74',
    ice: '#74CDBF',
    dragon: '#096CC3',
    dark: '#5B5363',
    fairy: '#EC91E6',
  };
  constructor() { }
  ngOnInit(): void{
    this.bgColor = this.appPokemonType2 ? `background:linear-gradient(135deg, ${this.typeColors[this.appPokemonType]} 33%, ${this.typeColors[this.appPokemonType2]} 66%)` : `background-color:${this.typeColors[this.appPokemonType]}`;
  }
}
