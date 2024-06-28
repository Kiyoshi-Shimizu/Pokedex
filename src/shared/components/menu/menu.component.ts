import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  template: `<div>
    <button width="10px">Home</button>
    <button width="10px">Pokemon List</button>
  </div>`,
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
