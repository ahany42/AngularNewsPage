import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { loggedInUserService} from './logged-in-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-news';
  data:User={
    id:0,
    userName:"",
    avatar:""
  };
  constructor(private UserService :loggedInUserService){}
  ngOnInit():void{
   this.UserService.getData().subscribe(
   (response)=>{
     this.data = response;
   },
   (error)=>{
     console.error("Error Fetching Data",error);
   }
   )
   
  }
}
