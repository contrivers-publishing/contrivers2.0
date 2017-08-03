import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {
  slug: string = 'initial slug';
  article: any = 'initial article';

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      console.log('getting product with slug: ', this.slug);
      this.article = this.postsService.getArticle(this.slug);
      console.log("in full article init", this.article);
    });
    this.postsService.articleChanged.subscribe(
      () => {
        this.article = this.postsService.currentArticle;
      }
    );
  }

}
