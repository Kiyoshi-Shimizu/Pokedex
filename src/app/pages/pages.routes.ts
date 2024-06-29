import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                loadChildren:()=> import('../pages/pokedex/pokedex.module').then(m => m.PokedexModule)
            }
        ]
       
    }
];
