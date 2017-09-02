import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

// import { keystone } from 'keystone';

@Component({
  selector: '[app-articles]',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any;
  limit = 5;
  isFormShown: Boolean = false;
  displayType: String = 'none';

  constructor(private postsService: PostsService) {
    this.postsService = postsService;
    console.log("articles constructor started")
  }

  ngOnInit() {
    console.log("articles oninit started", this.articles)
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
