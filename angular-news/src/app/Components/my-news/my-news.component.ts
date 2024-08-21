import { Component,OnInit,Input} from '@angular/core';
import { News } from 'src/app/news';
import { MyNewsService} from 'src/app/my-news.service';
import { Router } from '@angular/router';
import { API } from '../api';
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
   this.data = this.data.filter(news=>news.id!==id);
   try {
    const response = await fetch(`${API.baseUrl}news/delete/${id}`, {
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
  console.log("deleted");
 }

  EditNews(id: number) {
    this.router.navigate([`/editnews/${id}`]);
  }
 
}
