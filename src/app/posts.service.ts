import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  allArticles;
  content;
  dataChanged = new Subject<void>();
  articleChanged = new Subject<void>();
  currentArticle;

  constructor(private http: Http) {
    this.http = http;
    console.log("post service constructor started");
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
          console.log("I CANT SEE DATA HERE: ", this.allArticles);
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
          console.log("I CANT SEE DATA HERE: ", this.currentArticle);
          this.articleChanged.next();
          return this.currentArticle;
        }
      );
  }

}
