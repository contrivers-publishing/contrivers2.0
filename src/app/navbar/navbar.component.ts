import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isFormShown: Boolean = false;
  displayType: String = 'none';

  constructor() { }

  ngOnInit() {
  }

  onShowForm() {
    console.log("button clicked", this.isFormShown);
    this.isFormShown = !this.isFormShown;
  }

  onShowMenu() {
    if(this.displayType === 'none') {
      this.displayType = 'block';
    } else {
      this.displayType = 'none';
    }
  }

}
