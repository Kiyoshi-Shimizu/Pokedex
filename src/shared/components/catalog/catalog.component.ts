import { Component } from '@angular/core';
import { PokemonEntity } from '../../../app/entities/pokemonEntity';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/204.gif'
            }
          }
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/205.gif'
            }
          }
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/206.gif'
            }
          }
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/207.gif'
            }
          }
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/208.gif'
            }
          }
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/209.gif'
            }
          }
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/210.gif'
            }
          }
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/211.gif'
            }
          }
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/212.gif'
            }
          }
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/213.gif'
            }
          }
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
      name: 'Heracross',
      order: 311,
      url:'https://pokeapi.co/api/v2/pokemon/214/',
      detail: {
        id: 214,
        height: 15,
        weight: 540,
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
              name: 'fighting',
              url: 'https://pokeapi.co/api/v2/type/2/',
              imgSource: 'https://pokeapi.co/api/v2/type/2/'
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
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/214.gif'
            }
          }
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
      name: 'Sneasel',
      order: 312,
      url:'https://pokeapi.co/api/v2/pokemon/215/',
      detail: {
        id: 215,
        height: 9,
        weight: 280,
        types: [
          {
            slot: 1,
            type: {
              name: 'dark',
              url: 'https://pokeapi.co/api/v2/type/17/',
              imgSource: 'https://pokeapi.co/api/v2/type/17/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'ice',
              url: 'https://pokeapi.co/api/v2/type/15/',
              imgSource: 'https://pokeapi.co/api/v2/type/15/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'inner-focus',
              url: 'https://pokeapi.co/api/v2/ability/39/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/215.gif'
            }
          }
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
      name: 'Teddiursa',
      order: 313,
      url:'https://pokeapi.co/api/v2/pokemon/216/',
      detail: {
        id: 216,
        height: 6,
        weight: 88,
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
              name: 'pickup',
              url: 'https://pokeapi.co/api/v2/ability/1/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/216.gif'
            }
          }
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
      name: 'Ursaring',
      order: 314,
      url:'https://pokeapi.co/api/v2/pokemon/217/',
      detail: {
        id: 217,
        height: 18,
        weight: 1258,
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
              name: 'guts',
              url: 'https://pokeapi.co/api/v2/ability/62/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/217.gif'
            }
          }
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
      name: 'Slugma',
      order: 315,
      url:'https://pokeapi.co/api/v2/pokemon/218/',
      detail: {
        id: 218,
        height: 7,
        weight: 350,
        types: [
          {
            slot: 1,
            type: {
              name: 'fire',
              url: 'https://pokeapi.co/api/v2/type/10/',
              imgSource: 'https://pokeapi.co/api/v2/type/10/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'magma-armor',
              url: 'https://pokeapi.co/api/v2/ability/40/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/218.gif'
            }
          }
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
      name: 'Magcargo',
      order: 316,
      url:'https://pokeapi.co/api/v2/pokemon/219/',
      detail: {
        id: 219,
        height: 8,
        weight: 550,
        types: [
          {
            slot: 1,
            type: {
              name: 'fire',
              url: 'https://pokeapi.co/api/v2/type/10/',
              imgSource: 'https://pokeapi.co/api/v2/type/10/'
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
              name: 'magma-armor',
              url: 'https://pokeapi.co/api/v2/ability/40/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/219.gif'
            }
          }
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
      name: 'Swinub',
      order: 317,
      url:'https://pokeapi.co/api/v2/pokemon/220/',
      detail: {
        id: 220,
        height: 4,
        weight: 65,
        types: [
          {
            slot: 1,
            type: {
              name: 'ice',
              url: 'https://pokeapi.co/api/v2/type/15/',
              imgSource: 'https://pokeapi.co/api/v2/type/15/'
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
              name: 'oblivious',
              url: 'https://pokeapi.co/api/v2/ability/12/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/220.gif'
            }
          }
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
      name: 'Piloswine',
      order: 318,
      url:'https://pokeapi.co/api/v2/pokemon/221/',
      detail: {
        id: 221,
        height: 11,
        weight: 558,
        types: [
          {
            slot: 1,
            type: {
              name: 'ice',
              url: 'https://pokeapi.co/api/v2/type/15/',
              imgSource: 'https://pokeapi.co/api/v2/type/15/'
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
              name: 'oblivious',
              url: 'https://pokeapi.co/api/v2/ability/12/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/221.gif'
            }
          }
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
      name: 'Corsola',
      order: 319,
      url:'https://pokeapi.co/api/v2/pokemon/222/',
      detail: {
        id: 222,
        height: 6,
        weight: 50,
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
              name: 'rock',
              url: 'https://pokeapi.co/api/v2/type/6/',
              imgSource: 'https://pokeapi.co/api/v2/type/6/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'hustle',
              url: 'https://pokeapi.co/api/v2/ability/55/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/222.gif'
            }
          }
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
      name: 'Remoraid',
      order: 320,
      url:'https://pokeapi.co/api/v2/pokemon/223/',
      detail: {
        id: 223,
        height: 6,
        weight: 120,
        types: [
          {
            slot: 1,
            type: {
              name: 'water',
              url: 'https://pokeapi.co/api/v2/type/11/',
              imgSource: 'https://pokeapi.co/api/v2/type/11/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'hustle',
              url: 'https://pokeapi.co/api/v2/ability/55/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/223.gif'
            }
          }
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
      name: 'Octillery',
      order: 321,
      url:'https://pokeapi.co/api/v2/pokemon/224/',
      detail: {
        id: 224,
        height: 9,
        weight: 285,
        types: [
          {
            slot: 1,
            type: {
              name: 'water',
              url: 'https://pokeapi.co/api/v2/type/11/',
              imgSource: 'https://pokeapi.co/api/v2/type/11/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'suction-cups',
              url: 'https://pokeapi.co/api/v2/ability/21/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/224.gif'
            }
          }
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
      name: 'Delibird',
      order: 322,
      url:'https://pokeapi.co/api/v2/pokemon/225/',
      detail: {
        id: 225,
        height: 9,
        weight: 160,
        types: [
          {
            slot: 1,
            type: {
              name: 'ice',
              url: 'https://pokeapi.co/api/v2/type/15/',
              imgSource: 'https://pokeapi.co/api/v2/type/15/'
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
              name: 'vital-spirit',
              url: 'https://pokeapi.co/api/v2/ability/21/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/225.gif'
            }
          }
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
      name: 'Mantine',
      order: 323,
      url:'https://pokeapi.co/api/v2/pokemon/226/',
      detail: {
        id: 226,
        height: 21,
        weight: 2200,
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
              name: 'flying',
              url: 'https://pokeapi.co/api/v2/type/3/',
              imgSource: 'https://pokeapi.co/api/v2/type/3/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'swift-swim',
              url: 'https://pokeapi.co/api/v2/ability/33/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/226.gif'
            }
          }
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
      name: 'Skarmory',
      order: 324,
      url:'https://pokeapi.co/api/v2/pokemon/227/',
      detail: {
        id: 227,
        height: 17,
        weight: 505,
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
              name: 'flying',
              url: 'https://pokeapi.co/api/v2/type/3/',
              imgSource: 'https://pokeapi.co/api/v2/type/3/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'keen-eye',
              url: 'https://pokeapi.co/api/v2/ability/52/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/227.gif'
            }
          }
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
      name: 'Houndour',
      order: 325,
      url:'https://pokeapi.co/api/v2/pokemon/228/',
      detail: {
        id: 228,
        height: 6,
        weight: 108,
        types: [
          {
            slot: 1,
            type: {
              name: 'dark',
              url: 'https://pokeapi.co/api/v2/type/17/',
              imgSource: 'https://pokeapi.co/api/v2/type/17/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'fire',
              url: 'https://pokeapi.co/api/v2/type/10/',
              imgSource: 'https://pokeapi.co/api/v2/type/10/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'early-bird',
              url: 'https://pokeapi.co/api/v2/ability/35/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/228.gif'
            }
          }
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
      name: 'Houndoom',
      order: 326,
      url:'https://pokeapi.co/api/v2/pokemon/229/',
      detail: {
        id: 229,
        height: 14,
        weight: 350,
        types: [
          {
            slot: 1,
            type: {
              name: 'dark',
              url: 'https://pokeapi.co/api/v2/type/17/',
              imgSource: 'https://pokeapi.co/api/v2/type/17/'
            }
          },
          {
            slot: 2,
            type: {
              name: 'fire',
              url: 'https://pokeapi.co/api/v2/type/10/',
              imgSource: 'https://pokeapi.co/api/v2/type/10/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'early-bird',
              url: 'https://pokeapi.co/api/v2/ability/35/'
            },
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png',
          other: {
            showdown: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/229.gif'
            }
          }
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
    }
  ];
}
