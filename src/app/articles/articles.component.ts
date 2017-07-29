import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

// import { keystone } from 'keystone';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
      this.articles = posts;

    });
  }
}
