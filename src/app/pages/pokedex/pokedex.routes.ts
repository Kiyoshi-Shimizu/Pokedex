import { Routes } from '@angular/router'
import { PokedexComponent } from './pokedex.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonManageComponent } from './pokemon-manage/pokemon-manage.component';
export const routes: Routes = [
    {
        path: '',
        component: PokedexComponent,
        children: [
            {
                path: '',
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
                path:'edit',
                component: PokemonManageComponent
            }
        ]
    }
];
