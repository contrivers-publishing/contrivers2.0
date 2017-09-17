import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notes'
})
export class NotesPipe implements PipeTransform {
  spot: number;
  noteNumber: string;
  noteTemplate: string;
  replaceText: string;
  articleText: string;
  space: number;

  transform(value: any): string {
    this.articleText = value.content.extended.slice();
    if (this.articleText.indexOf('###')<0) {
      return this.articleText;
    } else {
      while (this.articleText.indexOf('###')>0) {
        this.articleText = this.reformatNotes(this.articleText);
      }
    }
    return this.articleText;
  }

  reformatNotes(text) {
    this.spot = text.indexOf('###');
    this.space = text.slice(this.spot).indexOf(' ');
    this.noteNumber = text.slice(this.spot + 3, this.spot + this.space);
    this.replaceText = text.slice(this.spot, this.spot + this.space);
    this.noteTemplate = `
        <div class="bigfoot-footnote__container">${this.noteNumber}</div>
    `;
    console.log('Spot:', this.spot)
    console.log('Number:',this.noteNumber);
    console.log('Space:', this.space);
    console.log('replaceText:', this.replaceText);
    console.log('Template:', this.noteTemplate);
    text = text.replace(this.replaceText,this.noteTemplate);
    return text;
  }

}


// <button class="bigfoot-footnote__button"
// id="fnref:1" data-footnote-number="1"
// data-footnote-identifier="1" alt="See Footnote 1" rel="footnote"
// data-bigfoot-footnote="<p>For example: Leon Trotsky, ‘The Young Turks,’ accessed August 10, 2016, https://www.marxists.org/archive/trotsky/1909/01/1909-turks.htm (Original Kievskaya Mysl, No.3, 3 January 1909 and Rosa Luxemburg, ‘Social Democracy and the National Struggles in Turkey,’ August 10, 2016, https://www.marxists.org/archive/luxemburg/1896/10/10.htm (Original: Sächsische Arbeiter-Zeitung, 8–10 October 1986.)</p>">
