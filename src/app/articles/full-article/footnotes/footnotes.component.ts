import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../../posts.service';


@Component({
  selector: '[app-footnotes]',
  templateUrl: './footnotes.component.html',
  styleUrls: ['./footnotes.component.css']
})
export class FootnotesComponent implements OnInit {
  @Input() footnotes;
  @Input() slug;
  activeFootnote = 1;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.setActiveFootnote(1);
    this.postsService.activeFootnoteChanged.subscribe(
      () => {
        this.activeFootnote = this.postsService.activeFootnote;
      }
    );
  }

  changeFootnote(num: number) {
    this.postsService.setActiveFootnote(num);
  }

}
