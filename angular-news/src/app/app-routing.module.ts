import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MyNewsComponent } from './Components/my-news/my-news.component';
import { AddNewsComponent } from './Components/add-news/add-news.component';
import { EditNewsComponent } from './Components/edit-news/edit-news.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path:  'MyNews',component :MyNewsComponent},
  { path:  'addnews',component :AddNewsComponent},
  { path:  'editnews/:id',component :EditNewsComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
