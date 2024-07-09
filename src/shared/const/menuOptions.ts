import { MenuOption } from './../entities/menu-option/menuOption';


export const adminMenu: MenuOption[] = [
    {
      name: "Home",
      routerLink: "home"
    },
    {
      name: "Pokedex",
      routerLink: "pokedex"
    },
    {
      name: "Manage Pokemon",
      routerLink: "manage-pokemon"
    }
  ]
  
  export const userMenu: MenuOption[] = [
    {
      name: "Home",
      routerLink: "home"
    },
    {
      name: "Pokedex",
      routerLink: "pokedex"
    }
  ]