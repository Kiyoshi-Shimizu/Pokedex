import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HoverDirective } from './directives/hover.directive';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { PokemonService } from './services/pokemon.service';
import { PokenamePipe } from './pipe/pokeName/pokename.pipe';
import { FilterNamePipe } from './pipe/nameFilter/nameFilter.pipe';



@NgModule({
  providers: [PokemonService],
  declarations: [HoverDirective, PokemonTypeDirective, PokenamePipe, FilterNamePipe],
  imports: [
    CommonModule,
    ToolbarComponent
  ],
  exports: [
    HoverDirective, 
    PokemonTypeDirective, 
    ToolbarComponent,
    PokenamePipe,
    FilterNamePipe
  ] 
})
export class SharedModule { }
