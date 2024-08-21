import { Component,OnInit,Input} from '@angular/core';
import { News } from 'src/app/news';
import { MyNewsService} from 'src/app/my-news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-news',
  templateUrl: './my-news.component.html',
  styleUrls: ['./my-news.component.css']
})
export class MyNewsComponent implements OnInit{
 data :News[]=[];
 
 constructor(private myNewsService :MyNewsService,private router:Router){}
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
    const response = await fetch(`https://blog-website-express-five.vercel.app/news/delete/${id}`, {
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
