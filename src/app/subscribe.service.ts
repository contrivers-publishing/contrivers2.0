import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { EmailValidator } from '@angular/forms/src/directives/validators';

@Injectable()
export class SubscribeService {

  constructor(private http: Http) {
    this.http = http;
  }

  addEmail(email: EmailValidator) {
    //this.http.post()
  }

}
