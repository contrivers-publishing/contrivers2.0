import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  slug: string;
  page: any;
  articles: any;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.page = this.postsService.getCurrentPage(this.slug);
    });
    this.postsService.currentPageChanged.subscribe(
      () => {
        this.page = this.postsService.currentPage;
      }
    );
    this.articles = this.postsService.fetchArticles();
    this.postsService.dataChanged.subscribe(
      () => {
        this.articles = this.postsService.allArticles;
      }
    );
  }

}
