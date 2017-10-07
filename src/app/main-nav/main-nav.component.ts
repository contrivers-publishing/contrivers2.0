import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-main-nav]',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  displayType: String = 'none';
  pages: any;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.pages = this.postsService.getPages();
    this.postsService.pagesChanged.subscribe(
      () => {
        this.pages = this.postsService.pages;
      }
    );
  }

  onShowMenu() {
    if(this.displayType === 'none') {
      this.displayType = 'block';
    } else {
      this.displayType = 'none';
    }
  }
}
