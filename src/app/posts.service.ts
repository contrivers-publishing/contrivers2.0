import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService implements OnInit {
  allArticles: any;
  reviews: any;
  essays: any;
  interviews: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getAllArticles().subscribe(posts => {
      this.allArticles = posts;
      this.reviews = posts.filter(post => post.contentType === "book review")
      this.essays = posts.filter(post => post.contentType === "essay")
      this.interviews = posts.filter(post => post.contentType === "interview")
    });
  }

  getAllArticles() {
    return this.http.get('/api')
      .map(res => res.json());
  }

}
