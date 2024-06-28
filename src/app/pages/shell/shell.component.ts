import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  standalone: false,
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {
  title: string = "Pokedex";
  img: string = "https://th.bing.com/th/id/OIP.K0Zz4xirlNoXu_nqrVuA1gHaHZ?rs=1&pid=ImgDetMain";
}
