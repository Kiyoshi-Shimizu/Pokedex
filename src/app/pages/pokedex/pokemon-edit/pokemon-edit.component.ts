import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-edit',
  standalone: false,
  templateUrl: './pokemon-edit.component.html',
  styleUrl: './pokemon-edit.component.scss'
})
export class PokemonEditComponent implements OnInit{
  pokemonForm: FormGroup;
  constructor(private fb:FormBuilder){
    this.pokemonForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      sprite: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    // this.pokemonForm = this.fb.group({
    //   name: [''],
    //   height: [''],
    //   weight: [''],
    //   sprite: ['']
    // })
  }
  onSubmit(){
    console.log(this.pokemonForm.value);
  }
}
