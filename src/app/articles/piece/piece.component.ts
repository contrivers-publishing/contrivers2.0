import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {
  @Input() article;
  @Input() test;

  constructor() { }

  ngOnInit() {

  }

}
