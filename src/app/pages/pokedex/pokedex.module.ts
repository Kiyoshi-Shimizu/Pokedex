import { NgModule } from "@angular/core";
import { routes } from "./pokedex.routes";
import { PokedexComponent } from "./pokedex.component";
import { PokedexListComponent } from "./pokedex-list/pokedex-list.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule } from "@angular/forms";
import {  provideHttpClient } from "@angular/common/http";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

@NgModule({
    declarations: [PokedexComponent, PokedexListComponent, PokemonCardComponent, PokemonDetailComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [provideHttpClient()],
    bootstrap: [PokedexComponent]
})
export class PokedexModule { }