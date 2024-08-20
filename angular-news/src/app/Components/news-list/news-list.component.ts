import { Component,OnInit,Input} from '@angular/core';
import { News } from 'src/app/news';
import { NewsService } from 'src/app/news.service';
import { Router } from '@angular/router';
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
 async DeleteNews(id:number){
  console.log("called");
   this.data = this.data.filter(news=>news.id!==id);
   try {
    const response = await fetch(`http://localhost:3004/news/delete/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    else{
      console.log("Deleted Successfully");
    }
  } catch (error) {
    console.error('Error deleting item:', error);
  }
 }
 EditNews(id: number) {
  this.router.navigate([`/editnews/${id}`]);
}
}
