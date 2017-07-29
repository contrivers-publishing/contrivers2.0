import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  @Input() article: any;

  constructor() { }

  ngOnInit() {
  }

}
