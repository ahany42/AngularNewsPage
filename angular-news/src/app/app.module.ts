import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Components/about/about.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MyNewsComponent } from './Components/my-news/my-news.component';
import { HomeLayoutComponent } from './Components/home-layout/home-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { NewsCardComponent } from './Components/news-card/news-card.component';
import { NewsListComponent } from './Components/news-list/news-list.component';
import { HttpClientModule } from '@angular/common/http';  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    MyNewsComponent,
    HomeLayoutComponent,
    NewsCardComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
