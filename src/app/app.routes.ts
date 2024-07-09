import { Routes } from '@angular/router';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { AuthGuardService } from '../shared/guard/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren:()=> import('../app/pages/pages.module').then(m => m.PagesModule)
    }
];
