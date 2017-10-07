import { Component } from '@angular/core';
// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// App Components
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { FeaturedComponent } from './articles/featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { SubscriptionComponent } from './articles/subscription/subscription.component';
import { PieceComponent } from './articles/piece/piece.component';
import { ContentControlComponent } from './articles/content-control/content-control.component';
import { FullArticleComponent } from './articles/full-article/full-article.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeadComponent } from './head/head.component';
import { SocialIconsComponent } from './articles/full-article/social-icons/social-icons.component';
import { CommentsComponent } from './articles/full-article/comments/comments.component';
import { FootnotesComponent } from './articles/full-article/footnotes/footnotes.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageComponent } from './page/page.component';
import { FooterMissedComponent } from './footer/footer-missed/footer-missed.component';
import { FooterAboutComponent } from './footer/footer-about/footer-about.component';
import { FooterPrefooterComponent } from './footer/footer-prefooter/footer-prefooter.component';
import { MainFooterComponent } from './footer/main-footer/main-footer.component';
import { FooterJoinComponent } from './footer/footer-join/footer-join.component';
import { BottomFooterComponent } from './footer/bottom-footer/bottom-footer.component';
import { NoteComponent } from './articles/full-article/note/note.component';

// App services
import { PostsService } from './posts.service';

// App Pipes
import { FilterPipe } from './filter.pipe';
import { NotesPipe } from './notes.pipe';
import { TruncatePipe } from './truncate.pipe';

const ROUTES = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'article/:slug',
    component: FullArticleComponent
  },
  {
    path: 'page/:slug',
    component: PageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    FeaturedComponent,
    FooterComponent,
    SubscriptionComponent,
    PieceComponent,
    ContentControlComponent,
    FullArticleComponent,
    MainPageComponent,
    HeadComponent,
    SocialIconsComponent,
    CommentsComponent,
    FootnotesComponent,
    MainNavComponent,
    FilterPipe,
    FooterMissedComponent,
    FooterAboutComponent,
    FooterPrefooterComponent,
    MainFooterComponent,
    FooterJoinComponent,
    BottomFooterComponent,
    NoteComponent,
    NotesPipe,
    PageComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
