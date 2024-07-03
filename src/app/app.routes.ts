import { Routes } from '@angular/router';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { AuthGuardService } from '../shared/guard/auth-guard.service';

export const routes: Routes = [
    {
        path:'auth-callback',
        component: AuthCallbackComponent
    },
    {
        path: '',
        canActivate: [AuthGuardService],
        loadChildren:()=> import('../app/pages/pages.module').then(m => m.PagesModule)
    }
];
