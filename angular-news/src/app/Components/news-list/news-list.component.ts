import { Component,OnInit} from '@angular/core';
import { News } from 'src/app/news';
import { DataService } from 'src/app/news.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{
  data :News[]=[];
 constructor(private myNewsService :DataService){}
 ngOnInit():void{
  this.myNewsService.getData().subscribe(
  (response)=>{
    this.data = response;
  },
  (error)=>{
    console.error("Error Fetching Data",error);
  }
  )
 }
}
