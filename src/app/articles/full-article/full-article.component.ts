import { PostsService } from './../../posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      this.article = this.postsService.getArticle(this.slug);
    });
    this.postsService.articleChanged.subscribe(
      () => {
        this.article = this.postsService.currentArticle;
      }
    );
  }

}
