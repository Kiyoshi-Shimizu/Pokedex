import { Pipe, PipeTransform } from '@angular/core';
import { japaneseNames } from '../../const/japanaseNames';

@Pipe({
  name: 'pokename',
  standalone: false
})
export class PokenamePipe implements PipeTransform {
  pokesJapanese: any[] = japaneseNames;
  transform(value: string): string {
    this.pokesJapanese.forEach(poke => {
      if(poke.ingles === value)
        value = poke.japones;
    });
    return value;
  }

}
