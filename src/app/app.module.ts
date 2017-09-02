// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// App Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticlesComponent } from './articles/articles.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { SubscriptionComponent } from './articles/subscription/subscription.component';
import { PieceComponent } from './articles/piece/piece.component';
import { ContentControlComponent } from './articles/content-control/content-control.component';

// App services
import { PostsService } from './posts.service';
import { FullArticleComponent } from './full-article/full-article.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StickNavComponent } from './sticky-nav/sticky-nav.component';
import { HeadComponent } from './head/head.component';
import { SocialIconsComponent } from './full-article/social-icons/social-icons.component';
import { CommentsComponent } from './full-article/comments/comments.component';
import { FootnotesComponent } from './full-article/footnotes/footnotes.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const ROUTES = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'article/:slug',
    component: FullArticleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    FeaturedComponent,
    FooterComponent,
    SubscriptionComponent,
    PieceComponent,
    ContentControlComponent,
    FullArticleComponent,
    MainPageComponent,
    StickNavComponent,
    HeadComponent,
    SocialIconsComponent,
    CommentsComponent,
    FootnotesComponent,
    MainNavComponent
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
