import { Component, inject, OnInit } from '@angular/core';
import { MenuOption } from '../../../app/entities/menu-option/menuOption';
import { MenuService } from '../../services/general/menu.service';
import { AuthService } from '../../services/auth/auth.service';
import { filter, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `<section class="menu">
    @for(option of menuOptions; track option.name)
    {
      <a class="menu-option" href="{{option.routerLink}}">{{option.name}}</a>
    }
    <button id="logout" (click)="login()">Logout</button>
  </section>`,
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  private menuService = inject(MenuService);
  private authService = inject(AuthService);
  private router = inject(Router);
  menuOptions: MenuOption[] =[];
  isLoggedIn = false;
  ngOnInit(): void {
    this.authService.isLoggedIn().pipe(
      switchMap(() => this.authService.getUserRole()),
      switchMap(d => this.menuService.getMenuByRole(d))
    ).subscribe(f => this.menuOptions = f);
  }
  login(){
    this.authService.logout().subscribe(() => this.router.navigate(['/login']));
  }
}
