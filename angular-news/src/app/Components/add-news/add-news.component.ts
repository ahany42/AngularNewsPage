import { Component ,Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {News} from 'src/app/news';
import { API } from '../api';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})

export class AddNewsComponent implements OnInit {
  @Input () edit:boolean=false;
  @Input() id: number | null = null;
 ngOnInit() {
  if(this.id!==null){
    this.http.get(`${API.baseUrl}news/${this.id}`)
    .subscribe(response=> {
      console.log('Got News successfully:', response);
      let newsToBeEdited = response as News;
      this.newsTitle=newsToBeEdited.title;
      this.newsDescription=newsToBeEdited.body;
    }, error => {
      console.error('Error getting news:', error);
    });
  }
}

  FormatDate() {
    const now = new Date(); 
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear(); 
  
    return `${day}-${month}-${year}`;
  }
  newsTitle: any = '';
  newsDescription: any = '';
  constructor(private http: HttpClient,private router:Router) {}
  AddNews(NewsTitle:HTMLInputElement,NewsDescription:HTMLTextAreaElement) {
    if(NewsTitle.value && NewsDescription.value){
      const newNews = {
        id:Date.now(),
        title: NewsTitle.value,
        body:NewsDescription.value,
        date:this.FormatDate(),
        postedBy:3,
        avatar: "https://i.ibb.co/KLcQKYv/image.png",
        userName: "Aly Hany"
        
      };
      this.http.post(`${API.baseUrl}news/add`, newNews)
      .subscribe(response => {
        console.log('News added successfully:', response);
      }, error => {
        console.error('Error adding news:', error);
      });
      NewsTitle.value="";
      NewsDescription.value="";
      console.log("added");
      this.router.navigate(['/MyNews']);
    }
    else{
      alert("Please Fill All Fields");
    }
  }
  async EditNews(NewsTitle:HTMLInputElement,NewsDescription:HTMLTextAreaElement){
    if(NewsTitle.value && NewsDescription.value){
      const editedNews = {
       title: NewsTitle.value ,
       body:NewsDescription.value
      };
    
      await this.http.patch(`${API.baseUrl}news/edit/${this.id}`, editedNews )
      .subscribe(response => {
        console.log('News edited successfully:', response);
      }, error => {
        console.error('Error editing news:', error);
      });
      console.log("edited");
      this.router.navigate(['/MyNews']);
    }
    else{
      alert("Please Fill All Fields");
    }
  }

}
