import { Component, input } from '@angular/core';
import { SharedModule } from "../../shared.module";

@Component({
    selector: 'app-toolbar',
    standalone: true,
    template: `
  <div class="toolbar">
    <img [src]="img()" width="80"/>
    <h1>{{title()}}</h1>
    <app-menu></app-menu>
  </div>
  `,
    styleUrl: './toolbar.component.scss',
    imports: [SharedModule]
})
export class ToolbarComponent {
  title = input.required<string>();
  img = input.required<string>();
}
