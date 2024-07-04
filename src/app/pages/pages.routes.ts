import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../../shared/guard/auth-guard.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

export const routes: Routes = [
    {
        path:'auth-callback',
        component: AuthCallbackComponent
    },
    {
        path: '',
        canActivate: [AuthGuardService],
        component: PagesComponent,
        children: [
            {
                path: '',
                loadChildren:()=> import('../pages/pokedex/pokedex.module').then(m => m.PokedexModule)
            }
        ]
    }
];
