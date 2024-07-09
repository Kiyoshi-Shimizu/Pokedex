import { PokemonService } from './../../../../shared/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonEntity } from '../../../../shared/entities/pokemon/pokemonEntity';

@Component({
  selector: 'app-pokemon-edit',
  standalone: false,
  templateUrl: './pokemon-edit.component.html',
  styleUrl: './pokemon-edit.component.scss'
})
export class PokemonEditComponent implements OnInit{
  pokemonForm: FormGroup;
  id = this.route.snapshot.params['id'];
  constructor(private fb:FormBuilder, private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router){
    this.pokemonForm = new FormGroup({
      name: new FormControl('', [Validators.required]), 
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      sprite: new FormControl('', [Validators.required]),
      sprite3d: new FormControl('', [Validators.required])
    });  
  }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (this.id) {
        this.pokemonService.getById(this.id).subscribe(pokemon => {
          if (pokemon) {
            this.pokemonForm.patchValue({
              name: pokemon.name,
              height: pokemon.height,
              weight: pokemon.weight,
              sprite: pokemon.sprites.front_default,
              sprite3d: pokemon.sprites.other.showdown.front_default
            });
          }
        });
      }
    });
  }
  onSubmit(){
    if(this.pokemonForm.valid){
      this.pokemonService.modificarLista({
        name: this.pokemonForm.value.name,
        url: `custom-url-${this.id}`,
        detail: {
          abilities: [{
            ability: {
              name: 'custom-ability',
              url: 'custom-url'
            },
            is_hidden: false,
            slot: 1
          }],
          moves: [
            {
              move: {
                name: 'custom-move',
                url: 'custom-url'
              }
            }
          ],
          types: [{
            slot: 1,
            type: {
              name: 'custom-type',
              url: 'custom-url'
            }
          }],
          order: this.id,
          id: this.id,
          height: this.pokemonForm.value.height,
          weight: this.pokemonForm.value.weight,
          sprites: {
            front_default: this.pokemonForm.value.sprite,
            other: {
              showdown: {
                front_default: this.pokemonForm.value.sprite3d
              }
            }
          }
        }
      } as PokemonEntity);
      this.router.navigate(['/pokedex']);
    }
  }
}
