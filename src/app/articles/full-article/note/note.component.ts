import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footnote',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  number: number;

  constructor() { }

  ngOnInit() {
  }

}
