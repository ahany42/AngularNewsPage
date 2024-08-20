import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MyNewsComponent } from './Components/my-news/my-news.component';
import { AddNewsComponent } from './Components/add-news/add-news.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path:  'MyNews',component :MyNewsComponent},
  { path:  'addnews',component :AddNewsComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
