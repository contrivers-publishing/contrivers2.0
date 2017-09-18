import { FootnotesComponent } from './articles/full-article/footnotes/footnotes.component';
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
  footnotes: string[];

  transform(value: any): string {
    this.articleText = value.content.extended.slice();
    this.footnotes = value.footnotes;
    if (this.articleText.indexOf('###') < 0) {
      return this.articleText;
    } else {
      while (this.articleText.indexOf('###') > 0) {
        this.articleText = this.reformatNotes(this.articleText, this.footnotes);
      }
    }
    return this.articleText;
  }

  reformatNotes(text, notes) {
    this.spot = text.indexOf('###');
    this.space = text.slice(this.spot).indexOf(' ');
    this.noteNumber = text.slice(this.spot + 3, this.spot + this.space);
    this.replaceText = text.slice(this.spot, this.spot + this.space);
    this.noteTemplate = `<div class="bigfoot-footnote__container" id="fnref:${this.noteNumber}"><button class="bigfoot-footnote__button"  alt="See Footnote ${this.noteNumber}" rel="footnote">${this.noteNumber}</button></div>`;
    text = text.replace(this.replaceText,this.noteTemplate);
    console.log('updated text',text)
    return text;
  }

}
