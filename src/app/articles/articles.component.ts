import { PostsService } from './../posts.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-articles]',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any;
  limit = 5;
  isFormShown: Boolean = false;
  @Input() searchText: String;

  constructor(private postsService: PostsService) {
    this.postsService = postsService;
  }

  ngOnInit() {
    this.articles = this.postsService.fetchArticles();
    this.postsService.dataChanged.subscribe(
      () => {
        this.articles = this.postsService.allArticles;
      }
    );
  }

  viewMore() {
    this.limit = this.limit + 5;
  }

  onShowForm() {
    this.isFormShown = !this.isFormShown;
  }

}
