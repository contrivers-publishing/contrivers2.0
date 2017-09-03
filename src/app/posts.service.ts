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
          this.featuredChanged.next();
          return this.featuredArticles;
        }
      );
  }

}
