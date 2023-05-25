import { downTo } from './helpers';

export class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(firstVerseBottles, lastVerseBottles) {
    const versesBottles = downTo(firstVerseBottles, lastVerseBottles);
    const verses = versesBottles.map((bottles) => this.verse(bottles));
    return verses.join('\n');
  }

  verse(initialBottles) {
    const firstLine = this.getFirstLine(initialBottles);
    const secondLine = this.getSecondLine(initialBottles);
    return `${firstLine}\n${secondLine}\n`;
  }

  getFirstLine(initialBottles) {
    if(initialBottles > 0) {
      const firstLineWord = this.getWord(initialBottles);
      return `${initialBottles} ${firstLineWord} of milk on the wall, ${initialBottles} ${firstLineWord} of milk.`;
    }
    return 'No more bottles of milk on the wall, no more bottles of milk.';
  }

  getSecondLine(initialBottles) {
    if(initialBottles === 0) {
      return 'Go to the store and buy some more, 99 bottles of milk on the wall.';
    }
    
    const finalBottles = initialBottles - 1;
    if(finalBottles > 0) {
      const word = this.getWord(finalBottles);
      return `Take one down and pass it around, ${finalBottles} ${word} of milk on the wall.`;
    }
    return 'Take it down and pass it around, no more bottles of milk on the wall.';
  }

  getWord(number) {
    if(number > 1) {
      return 'bottles';
    }

    return 'bottle';
  }
}