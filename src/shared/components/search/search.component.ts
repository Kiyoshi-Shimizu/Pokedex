import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  template: `<div class="filterBox" fxFlex="60">
              <label>Buscar</label>
              <input #autofocus [(ngModel)]="filterValue" (ngModelChange)="emitTypeEvent($event)">
            </div>`,
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  filterValue: string = '';
  @ViewChild('autofocus') autofocus: ElementRef | undefined;
  @Output() filterValueEvent = new EventEmitter<string>();
  emitTypeEvent(event:string){
    // Con ngModel se vincula el evento con la variable filterValue, por lo que al cambiar el valor del input se emite el evento
    this.filterValueEvent.emit(event);
  }
}
