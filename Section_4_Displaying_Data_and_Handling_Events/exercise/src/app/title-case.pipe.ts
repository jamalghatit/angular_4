import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitlecase',
})
export class TitleCase implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');

    for (let word of words) {
      let index = words.indexOf(word);
      if (!this.isPreposition(word) || words.indexOf(word) == 0) {
        words[index] = words[index].charAt(0).toUpperCase() + word.slice(1);
      } else {
        words[index] = words[index].toLowerCase();
      }
    }
    return words.join(' ');
  }
  private isPreposition(word: string): boolean {
    let preposition = ['of', 'the', 'a', 'on', 'to', 'into', 'at', 'in'];
    return preposition.includes(word.toLowerCase());
  }
}
