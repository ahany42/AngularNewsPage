import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})

export class AddNewsComponent {
  FormatDate() {
    const now = new Date(); 
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear(); 
  
    return `${day}-${month}-${year}`;
  }
  newsTitle: string = '';
  newsDescription: string = '';
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

}
