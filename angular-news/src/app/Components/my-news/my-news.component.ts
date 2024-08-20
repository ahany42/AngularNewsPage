import { Component,OnInit} from '@angular/core';
import { News } from 'src/app/news';
import { MyNewsService} from 'src/app/my-news.service';
@Component({
  selector: 'app-my-news',
  templateUrl: './my-news.component.html',
  styleUrls: ['./my-news.component.css']
})
export class MyNewsComponent implements OnInit{
 data :News[]=[];
 constructor(private myNewsService :MyNewsService){}
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
}
