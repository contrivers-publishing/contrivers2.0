import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-footnotes]',
  templateUrl: './footnotes.component.html',
  styleUrls: ['./footnotes.component.css']
})
export class FootnotesComponent implements OnInit {
  @Input() footnotes;

  constructor() { }

  ngOnInit() {
  }

}
