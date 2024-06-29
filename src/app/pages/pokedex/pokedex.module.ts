import { NgModule } from "@angular/core";
import { routes } from "./pokedex.routes";
import { PokedexComponent } from "./pokedex.component";
import { PokedexListComponent } from "./pokedex-list/pokedex-list.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    declarations: [PokedexComponent, PokedexListComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    bootstrap: [PokedexComponent]
})
export class PokedexModule { }