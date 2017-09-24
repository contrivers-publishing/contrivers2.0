import { PostsService } from './../../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-footer-missed]',
  templateUrl: './footer-missed.component.html',
  styleUrls: ['./footer-missed.component.css']
})
export class FooterMissedComponent implements OnInit {
  missedArticles;

    constructor(private postsService: PostsService) { }

    ngOnInit() {
      this.missedArticles = this.postsService.getMissed();
      this.postsService.missedChanged.subscribe(
        () => {
          this.missedArticles = this.postsService.missedArticles;
        }
      );
    }

}
