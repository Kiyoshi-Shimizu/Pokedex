import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokename',
  standalone: false
})
export class PokenamePipe implements PipeTransform {
  pokesJapanese: any[] = [
  {ingles: "pineco", japones: "クヌギダマ"},
  {ingles: "forretress", japones: "フォレトス"},
  {ingles: "dunsparce", japones: "ノコッチ"},
  {ingles: "gligar", japones: "グライガー"},
  {ingles: "steelix", japones: "ハガネール"},
  {ingles: "snubbull", japones: "ブルー"},
  {ingles: "granbull", japones: "グランブル"},
  {ingles: "qwilfish", japones: "ハリーセン"},
  {ingles: "scizor", japones: "ハッサム"},
  {ingles: "shuckle", japones: "ツボツボ"},
  {ingles: "heracross", japones: "ヘラクロス"},
  {ingles: "sneasel", japones: "ニューラ"},
  {ingles: "teddiursa", japones: "ヒメグマ"},
  {ingles: "ursaring", japones: "リングマ"},
  {ingles: "slugma", japones: "マグマッグ"},
  {ingles: "magcargo", japones: "マグカルゴ"},
  {ingles: "swinub", japones: "ウリムー"},
  {ingles: "piloswine", japones: "イノムー"},
  {ingles: "corsola", japones: "サニーゴ"},
  {ingles: "remoraid", japones: "テッポウオ"},
  {ingles: "octillery", japones: "オクタン"},
  {ingles: "delibird", japones: "デリバード"},
  {ingles: "mantine", japones: "マンタイン"},
  {ingles: "skarmory", japones: "エアームド"},
  {ingles: "houndour", japones: "デルビル"},
  {ingles: "houndoom", japones: "ヘルガー"}
  ]
  transform(value: string): string {
    this.pokesJapanese.forEach(poke => {
      if(poke.ingles === value)
        value = poke.japones;
    });
    return value;
  }

}
