import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/guard/auth-guard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'Pokedex';
  
  // pokemons: PokemonEntity[] = [
  //   {
  //     order: 301,
  //     name: 'Pineco',
  //     url:'https://pokeapi.co/api/v2/pokemon/204/',
  //     detail: {
  //       id: 204,
  //       height: 6,
  //       weight: 72,
  //       types: [
  //         {
  //           slot: 1,
  //           type: {
  //             name: 'bug',
  //             url: 'https://pokeapi.co/api/v2/type/7/',
  //             imgSource: 'https://pokeapi.co/api/v2/type/7/'
  //           }
  //         }
  //       ],
  //       abilities: [
  //         {
  //           ability: {
  //             name: 'sturdy',
  //             url: 'https://pokeapi.co/api/v2/ability/5/'
  //           },
  //           is_hidden: false,
  //           slot: 1
  //         }
  //       ],
  //       sprites: {
  //         front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
  //         other: {
  //           showdown: {
  //             front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/204.gif'
  //           }
  //         }
  //       },
  //       moves: [
  //         {
  //           move: {
  //             name: 'tackle',
  //             url: 'https://pokeapi.co/api/v2/move/33/'
  //           }
  //         }
  //       ]
  //     }
  //   }
  // ]
  // currentIndex = 0;
  // ngAfterViewInit(): void {
  //   this.selectPokemon(this.pokemons[0].order);
  // }
  // selectPokemon(index: number): void {
  //   this.currentIndex = index;
  //   this.updateCarousel();
  // }

  // updateCarousel(): void {
  //   this.updateLeftHidden();
  //   this.updateLeft();
  //   this.updateCenter();
  //   this.updateRight();
  //   this.updateRightHidden();
    
  // }
  // updateLeftHidden(): void {
  //   let leftHidden = document.querySelector('.left-hidden-card');
  //   leftHidden?.classList.remove('left-hidden-card');
  //   leftHidden = document.querySelector(`#pokemon-${this.currentIndex - 2}`);
  //   leftHidden?.classList.add('left-hidden-card');
  // }
  // updateLeft(): void {
  //   let left = document.querySelector('.left-card');
  //   left?.classList.remove('left-card');
  //   left = document.querySelector(`#pokemon-${this.currentIndex - 1}`);
  //   left?.classList.add('left-card');
  // }
  // updateCenter(): void {
  //   let center = document.querySelector('.center-card');
  //   center?.classList.remove('center-card');
  //   center = document.querySelector(`#pokemon-${this.currentIndex}`);
  //   center?.classList.add('center-card');
  // }
  // updateRight(): void {
  //   let right = document.querySelector('.right-card');
  //   right?.classList.remove('right-card');
  //   right = document.querySelector(`#pokemon-${this.currentIndex + 1}`);
  //   right?.classList.add('right-card');
  // }
  // updateRightHidden(): void {
  //   let rightHidden = document.querySelector('.right-hidden-card');
  //   rightHidden?.classList.remove('right-hidden-card');
  //   rightHidden = document.querySelector(`#pokemon-${this.currentIndex + 2}`);
  //   rightHidden?.classList.add('right-hidden-card');
  // }
}
