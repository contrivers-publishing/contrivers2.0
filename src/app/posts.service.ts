import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  allArticles;
  content;
  dataChanged = new Subject<void>();

  constructor(private http: Http) {
    this.http = http;
    console.log("post service constructor started");
    this.fetchArticles();
  }

    // this.getAllArticles().subscribe(posts => {
    //   this.allArticles = posts;

    //   // this.reviews = posts.filter(post => post.contentType === "book review").slice();
    //   // this.essays = posts.filter(post => post.contentType === "essay").slice();
    //   // this.interviews = posts.filter(post => post.contentType === "interview").slice();
    // });

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

}
