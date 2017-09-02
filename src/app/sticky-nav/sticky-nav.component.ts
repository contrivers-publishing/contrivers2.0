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
      // console.log("scrollTop is", number);
      // console.log("main nav info is", this.document.querySelector("main-nav"));
      if (number > 50) {
        this.navIsFixed = true;
        console.log('Fixed Nav changed to true', this.navIsFixed);
      } else if (this.navIsFixed && number < 50) {
        this.navIsFixed = false;
        console.log('Fixed Nav changed to false', this.navIsFixed);
      }
    }
}


// mainHeader = $('#main-header'),
// headerOffset = mainHeader.offset().top + mainHeader.outerHeight();
