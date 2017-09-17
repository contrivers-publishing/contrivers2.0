import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-note]',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input('app-note') number: number;

  constructor() { }

  ngOnInit() {
    console.log('calling from inside app-note')
  }

}
