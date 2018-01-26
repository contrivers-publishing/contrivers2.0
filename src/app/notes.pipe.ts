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
    if ('0123456789'.indexOf(text.slice(this.spot + 4, this.spot + 5)) > -1) {
      this.space = 5;
    } else {
      this.space = 4;
    }
    this.noteNumber = text.slice(this.spot + 3, this.spot + this.space);
    this.replaceText = text.slice(this.spot, this.spot + this.space);
    this.noteTemplate = `<span class='note' id="fnref:${this.noteNumber}"><a href="#NA" (click)="">${this.noteNumber}</a></span>`;
    text = text.replace(this.replaceText, this.noteTemplate);
    return text;
  }

}
