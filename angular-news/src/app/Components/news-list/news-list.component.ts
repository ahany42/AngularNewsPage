import { Component,OnInit,Input} from '@angular/core';
import { News } from 'src/app/news';
import { NewsService } from 'src/app/news.service';
import { Router } from '@angular/router';
import { API } from '../api';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{
  data :News[]=[];
 constructor(private NewsService :NewsService,private router :Router){}
 ngOnInit():void{
  this.NewsService.getData().subscribe(
  (response)=>{
    this.data = response;
  },
  (error)=>{
    console.error("Error Fetching Data",error);
  }
  )
 }
 async DeleteNews(id: number) {
  try {
    const response = await fetch(`${API.baseUrl}news/delete/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    this.data = this.data.filter(news => news.id !== id);
    console.log("Deleted Successfully");
  } catch (error) {
    console.error('Error deleting item:', error);
  }
}

 EditNews(id: number) {
  this.router.navigate([`/editnews/${id}`]);
}
}
