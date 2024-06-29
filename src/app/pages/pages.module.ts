import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [PagesComponent, ShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
