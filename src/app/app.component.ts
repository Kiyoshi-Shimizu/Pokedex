import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonEntity } from './entities/pokemonEntity';
import { HoverDirective } from './directives/hover.directive';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'Pokedex';
  
  pokemons: PokemonEntity[] = [
    {
      order: 301,
      name: 'Pineco',
      url:'https://pokeapi.co/api/v2/pokemon/204/',
      detail: {
        id: 204,
        height: 6,
        weight: 72,
        types: [
          {
            slot: 1,
            type: {
              name: 'bug',
              url: 'https://pokeapi.co/api/v2/type/7/',
              imgSource: 'https://pokeapi.co/api/v2/type/7/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'sturdy',
              url: 'https://pokeapi.co/api/v2/ability/5/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png'
        },
        moves: [
          {
            move: {
              name: 'tackle',
              url: 'https://pokeapi.co/api/v2/move/33/'
            }
          }
        ]
      }
    },
    {
      order: 302,
      name: 'Forretress',
      url:'https://pokeapi.co/api/v2/pokemon/205/',
      detail: {
        id: 205,
        height: 12,
        weight: 1258,
        types: [
          {
            slot: 1,
            type: {
              name: 'bug',
              url: 'https://pokeapi.co/api/v2/type/7/',
              imgSource: 'https://pokeapi.co/api/v2/type/7/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'steel',
              url: 'https://pokeapi.co/api/v2/type/9/',
              imgSource: 'https://pokeapi.co/api/v2/type/9/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'sturdy',
              url: 'https://pokeapi.co/api/v2/ability/5/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png'
        },
        moves: [
          {
            move: {
              name: 'tackle',
              url: 'https://pokeapi.co/api/v2/move/33/'
            }
          }
        ]
      }
    },
    {
      order: 303,
      name: 'Dunsparce',
      url:'https://pokeapi.co/api/v2/pokemon/206/',
      detail: {
        id: 206,
        height: 15,
        weight: 140,
        types: [
          {
            slot: 1,
            type: {
              name: 'normal',
              url: 'https://pokeapi.co/api/v2/type/1/',
              imgSource: 'https://pokeapi.co/api/v2/type/1/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'serene-grace',
              url: 'https://pokeapi.co/api/v2/ability/32/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png'
        },
        moves: [
          {
            move: {
              name: 'rage',
              url: 'https://pokeapi.co/api/v2/move/99/'
            }
          }
        ]
      }
    },
    {
      order: 304,
      name: 'Gligar',
      url:'https://pokeapi.co/api/v2/pokemon/207/',
      detail: {
        id: 207,
        height: 11,
        weight: 648,
        types: [
          {
            slot: 1,
            type: {
              name: 'ground',
              url: 'https://pokeapi.co/api/v2/type/5/',
              imgSource: 'https://pokeapi.co/api/v2/type/5/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'flying',
              url: 'https://pokeapi.co/api/v2/type/3/',
              imgSource: 'https://pokeapi.co/api/v2/type/3/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'hyper-cutter',
              url: 'https://pokeapi.co/api/v2/ability/55/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png'
        },
        moves: [
          {
            move: {
              name: 'rage',
              url: 'https://pokeapi.co/api/v2/move/99/'
            }
          }
        ]
      }
    },
    {
      order: 305,
      name: 'Steelix',
      url:'https://pokeapi.co/api/v2/pokemon/208/',
      detail: {
        id: 208,
        height: 92,
        weight: 4000,
        types: [
          {
            slot: 1,
            type: {
              name: 'steel',
              url: 'https://pokeapi.co/api/v2/type/9/',
              imgSource: 'https://pokeapi.co/api/v2/type/9/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'ground',
              url: 'https://pokeapi.co/api/v2/type/5/',
              imgSource: 'https://pokeapi.co/api/v2/type/5/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'rock-head',
              url: 'https://pokeapi.co/api/v2/ability/69/'
            },
            is_hidden: false,
            slot: 1,
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png'
        },
        moves: [
          {
            move: {
              name: 'rage',
              url: 'https://pokeapi.co/api/v2/move/99/'
            }
          }
        ]
      }
    },
    {
      order: 306,
      name: 'Snubbull',
      url:'https://pokeapi.co/api/v2/pokemon/209/',
      detail: {
        id: 209,
        height: 6,
        weight: 78,
        types: [
          {
            slot: 1,
            type: {
              name: 'fairy',
              url: 'https://pokeapi.co/api/v2/type/18/',
              imgSource: 'https://pokeapi.co/api/v2/type/18/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'intimidate',
              url: 'https://pokeapi.co/api/v2/ability/22/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png'
        },
        moves: [
          {
            move: {
              name: 'rage',
              url: 'https://pokeapi.co/api/v2/move/99/'
            }
          }
        ]
      }
    },
    {
      order: 307,
      name: 'Granbull',
      url:'https://pokeapi.co/api/v2/pokemon/210/',
      detail: {
        id: 210,
        height: 14,
        weight: 487,
        types: [
          {
            slot: 1,
            type: {
              name: 'fairy',
              url: 'https://pokeapi.co/api/v2/type/18/',
              imgSource: 'https://pokeapi.co/api/v2/type/18/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'intimidate',
              url: 'https://pokeapi.co/api/v2/ability/22/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png'
        },
        moves: [
          {
            move: {
              name: 'rage',
              url: 'https://pokeapi.co/api/v2/move/99/'
            }
          }
        ]
      }
    },
    {
      order: 308,
      name: 'Qwilfish',
      url:'https://pokeapi.co/api/v2/pokemon/211/',
      detail: {
        id: 211,
        height: 5,
        weight: 39,
        types: [
          {
            slot: 1,
            type: {
              name: 'water',
              url: 'https://pokeapi.co/api/v2/type/11/',
              imgSource: 'https://pokeapi.co/api/v2/type/11/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
              imgSource: 'https://pokeapi.co/api/v2/type/4/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'poison-point',
              url: 'https://pokeapi.co/api/v2/ability/38/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png'
        },
        moves: [
          {
            move: {
              name: 'rage',
              url: 'https://pokeapi.co/api/v2/move/99/'
            }
          }
        ]
      }
    },
    {
      order: 309,
      name: 'Scizor',
      url:'https://pokeapi.co/api/v2/pokemon/212/',
      detail: {
        id: 212,
        height: 18,
        weight: 1180,
        types: [
          {
            slot: 1,
            type: {
              name: 'bug',
              url: 'https://pokeapi.co/api/v2/type/7/',
              imgSource: 'https://pokeapi.co/api/v2/type/7/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'steel',
              url: 'https://pokeapi.co/api/v2/type/9/',
              imgSource: 'https://pokeapi.co/api/v2/type/9/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'swarm',
              url: 'https://pokeapi.co/api/v2/ability/68/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png'
        },
        moves: [
          {
            move: {
              name: 'rage',
              url: 'https://pokeapi.co/api/v2/move/99/'
            }
          }
        ]
      }
    },
    {
      order: 310,
      name: 'Shuckle',
      url:'https://pokeapi.co/api/v2/pokemon/213/',
      detail: {
        id: 213,
        height: 6,
        weight: 205,
        types: [
          {
            slot: 1,
            type: {
              name: 'bug',
              url: 'https://pokeapi.co/api/v2/type/7/',
              imgSource: 'https://pokeapi.co/api/v2/type/7/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'rock',
              url: 'https://pokeapi.co/api/v2/type/6/',
              imgSource: 'https://pokeapi.co/api/v2/type/6/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'sturdy',
              url: 'https://pokeapi.co/api/v2/ability/5/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png'
        },
        moves: [
          {
            move: {
              name: 'rage',
              url: 'https://pokeapi.co/api/v2/move/99/'
            }
          }
        ]
      }
    }
  ];
  currentIndex = 0;
  ngAfterViewInit(): void {
    this.selectPokemon(this.pokemons[0].order);
  }
  selectPokemon(index: number): void {
    this.currentIndex = index;
    this.updateCarousel();
  }

  updateCarousel(): void {
    this.updateLeftHidden();
    this.updateLeft();
    this.updateCenter();
    this.updateRight();
    this.updateRightHidden();
    
  }
  updateLeftHidden(): void {
    let leftHidden = document.querySelector('.left-hidden-card');
    leftHidden?.classList.remove('left-hidden-card');
    leftHidden = document.querySelector(`#pokemon-${this.currentIndex - 2}`);
    leftHidden?.classList.add('left-hidden-card');
  }
  updateLeft(): void {
    let left = document.querySelector('.left-card');
    left?.classList.remove('left-card');
    left = document.querySelector(`#pokemon-${this.currentIndex - 1}`);
    left?.classList.add('left-card');
  }
  updateCenter(): void {
    let center = document.querySelector('.center-card');
    center?.classList.remove('center-card');
    center = document.querySelector(`#pokemon-${this.currentIndex}`);
    center?.classList.add('center-card');
  }
  updateRight(): void {
    let right = document.querySelector('.right-card');
    right?.classList.remove('right-card');
    right = document.querySelector(`#pokemon-${this.currentIndex + 1}`);
    right?.classList.add('right-card');
  }
  updateRightHidden(): void {
    let rightHidden = document.querySelector('.right-hidden-card');
    rightHidden?.classList.remove('right-hidden-card');
    rightHidden = document.querySelector(`#pokemon-${this.currentIndex + 2}`);
    rightHidden?.classList.add('right-hidden-card');
  }
}
