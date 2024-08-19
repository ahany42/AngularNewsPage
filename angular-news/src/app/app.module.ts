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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    MyNewsComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
