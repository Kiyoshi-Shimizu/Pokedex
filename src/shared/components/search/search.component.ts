import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  template: `<div class="filterBox" fxFlex="60">
              <label>Buscar</label>
              <input #autofocus [(ngModel)]="filterValue">
            </div>`,
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  filterValue: string = '';
  @ViewChild('autofocus') autofocus: ElementRef | undefined;
}
