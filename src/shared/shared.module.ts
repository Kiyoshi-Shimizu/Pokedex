import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HoverDirective } from './directives/hover.directive';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CatalogComponent } from './components/catalog/catalog.component';



@NgModule({
  declarations: [MenuComponent, HoverDirective, PokemonTypeDirective, CatalogComponent],
  imports: [
    CommonModule,
    ToolbarComponent
  ],
  exports: [MenuComponent, HoverDirective, PokemonTypeDirective, ToolbarComponent, CatalogComponent]
})
export class SharedModule { }
