import { PostsService } from './../../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-featured]',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featuredArticles;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.featuredArticles = this.postsService.getFeatured();
    this.postsService.featuredChanged.subscribe(
      () => {
        this.featuredArticles = this.postsService.featuredArticles;
      }
    );
  }

}
