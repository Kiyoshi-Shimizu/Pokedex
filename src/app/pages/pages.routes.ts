import { Routes } from '@angular/router';
import { AuthGuardService } from '../../shared/guard/auth-guard.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { ShellComponent } from './shell/shell.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'auth-callback',
        component: AuthCallbackComponent
    },
    {
        path: '',
        redirectTo: 'auth-callback',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [AuthGuardService],
        component: ShellComponent,
        children: [
            {
                path: '',
                loadChildren:()=> import('../pages/pokedex/pokedex.module').then(m => m.PokedexModule)
            },
            {
                path: 'regions',
                loadChildren: ()=> import('../pages/region/region.module').then(m => m.regionModule)
            }
        ]
    }
];
