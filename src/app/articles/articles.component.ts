import { Component, OnInit } from '@angular/core';

import * as keystone from '../../../keystone.js';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
	articles = [];

  constructor() { }

  ngOnInit() {

  }

}
