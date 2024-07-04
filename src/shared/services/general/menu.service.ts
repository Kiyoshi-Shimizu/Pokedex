import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuOption } from '../../../app/entities/menu-option/menuOption';
import { adminMenu, userMenu } from '../../const/menuOptions';



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
