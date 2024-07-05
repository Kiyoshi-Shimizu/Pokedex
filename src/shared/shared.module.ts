import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HoverDirective } from './directives/hover.directive';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { PokemonService } from './services/pokemon.service';
import { PokenamePipe } from './pipe/pokeName/pokename.pipe';
import { FilterNamePipe } from './pipe/nameFilter/nameFilter.pipe';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { AuthGuardService } from './guard/auth-guard.service';



@NgModule({
  providers: [PokemonService, AuthGuardService],
  declarations: [
    HoverDirective, 
    PokemonTypeDirective, 
    PokenamePipe, 
    FilterNamePipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ToolbarComponent,
    FormsModule
  ],
  exports: [
    HoverDirective, 
    PokemonTypeDirective, 
    ToolbarComponent,
    PokenamePipe,
    FilterNamePipe,
    SearchComponent
  ] 
})
export class SharedModule { }
