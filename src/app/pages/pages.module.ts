import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PagesComponent, ShellComponent, AuthCallbackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
