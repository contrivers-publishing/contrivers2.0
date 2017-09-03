import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sticky-nav',
  templateUrl: './sticky-nav.component.html',
  styleUrls: ['./sticky-nav.component.css']
})
export class StickNavComponent implements OnInit {

  public navIsFixed = false;

    constructor(@Inject(DOCUMENT) private document: Document) { }

    ngOnInit() { }

    @HostListener("window:scroll", [])
    onWindowScroll() {
      let number = this.document.body.scrollTop;
      if (number > 50) {
        this.navIsFixed = true;
      } else if (this.navIsFixed && number < 50) {
        this.navIsFixed = false;
      }
    }
}
