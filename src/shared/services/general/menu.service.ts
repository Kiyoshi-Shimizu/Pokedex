import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { adminMenu, userMenu } from '../../const/menuOptions';
import { MenuOption } from '../../entities/menu-option/menuOption';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  public getMenuByRole(role: string): Observable<MenuOption[]>{
    if(role === 'admin') return of(adminMenu);
    return of(userMenu)
  }
}
