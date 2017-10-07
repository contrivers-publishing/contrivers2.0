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
  missedArticles;
  missedChanged = new Subject<void>();
  pages;
  pagesChanged = new Subject<void>();
  currentPage;
  currentPageChanged = new Subject<void>();

  constructor(private http: Http) {
    this.http = http;
    this.fetchArticles();
    this.getPages();
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

  getPages() {
    this.http.get('/api/page')
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data) => {
          this.pages = data;
          this.pagesChanged.next();
          return this.pages;
        }
      );
  }

  getCurrentPage(slug: string) {
    this.http.get('/api/page/' + slug)
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data) => {
          this.currentPage = data;
          this.currentPageChanged.next();
          return this.currentPage;
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

  getMissed() {
    this.http.get('/api/missed')
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data) => {
          this.missedArticles = data;
          this.missedChanged.next();
          return this.missedArticles;
        }
      );
  }
}
