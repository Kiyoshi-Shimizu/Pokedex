import { Routes } from '@angular/router'
import { PokedexComponent } from './pokedex.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonManageComponent } from './pokemon-manage/pokemon-manage.component';
import { AuthGuardService } from '../../../shared/guard/auth-guard.service';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
export const pokedexRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: PokedexComponent,
            },
            {
                path: 'pokedex',
                component: PokedexListComponent,
                data:{
                    title: 'Pokemon List'
                }
            },
            {
                path:'details/:id',
                component: PokemonDetailComponent
            },
            {
                path:'manage-pokemon',
                component: PokemonManageComponent
            },
            {
                path:'manage-pokemon/:id',
                component: PokemonEditComponent,
            }
        ]
    }
];
