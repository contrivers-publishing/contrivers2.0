import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  allArticles;
  dataChanged = new Subject<void>();
  currentArticle;
  articleChanged = new Subject<void>();
  featuredArticles;
  featuredChanged = new Subject<void>();

  constructor(private http: Http) {
    this.http = http;
    console.log('post service constructor started');
    this.fetchArticles();

  }

  fetchArticles() {
    this.http.get('/api')
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data) => {
          this.allArticles = data;
          console.log('I CANT SEE ALL ARTICLES HERE: ', this.allArticles);
          this.dataChanged.next();
          return this.allArticles;
        }
      );
  }

  getArticle(slug: string) {
    this.http.get('/api/' + slug)
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data) => {
          this.currentArticle = data;
          console.log('I CANT SEE CURRENT ARTICLES HERE: ', this.currentArticle);
          this.articleChanged.next();
          return this.currentArticle;
        }
      );
  }

  getFeatured() {
    this.http.get('/api/featured')
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data) => {
          this.featuredArticles = data;
          console.log('I CANT SEE FEATURED ARTICLES HERE: ', this.featuredArticles);
          this.featuredChanged.next();
          return this.featuredArticles;
        }
      );
  }

}
