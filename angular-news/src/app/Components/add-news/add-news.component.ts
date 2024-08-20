import { Component ,Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {News} from 'src/app/news';
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
    this.http.get(`http://localhost:3004/news/${this.id}`)
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
      this.http.post('http://localhost:3004/news/add', newNews)
      .subscribe(response => {
        console.log('News added successfully:', response);
      }, error => {
        console.error('Error adding news:', error);
      });
      NewsTitle.value="";
      NewsDescription.value="";
      this.router.navigate(['/MyNews']);
    }
    else{
      alert("Please Fill All Fields");
    }
  }
  EditNews(NewsTitle:HTMLInputElement,NewsDescription:HTMLTextAreaElement){
      NewsTitle.value = this.newsTitle;
      NewsDescription.value = this.newsDescription;
    if(NewsTitle.value && NewsDescription.value){
      const editedNews = {
       title:NewsTitle.value,
       body:NewsDescription.value
      };
    
      this.http.patch(`http://localhost:3004/news/edit/${this.id}`, editedNews )
      .subscribe(response => {
        console.log('News edited successfully:', response);
      }, error => {
        console.error('Error editing news:', error);
      });
      this.router.navigate(['/MyNews']);
    }
    else{
      alert("Please Fill All Fields");
    }
  }

}
