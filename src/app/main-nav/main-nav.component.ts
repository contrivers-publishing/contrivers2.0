import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-main-nav]',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  displayType: String = 'none';

  constructor() { }

  ngOnInit() {
  }

  onShowMenu() {
    if(this.displayType === 'none') {
      this.displayType = 'block';
    } else {
      this.displayType = 'none';
    }
  }
}
