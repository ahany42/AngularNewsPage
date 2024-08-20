import { Component,Input,OnInit, Output ,EventEmitter } from '@angular/core';
import { News } from 'src/app/news';
import { loggedInUserService } from 'src/app/logged-in-user.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit{
  @Input() news!:News;
  @Input() MyNews!:boolean;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  userId : number | undefined;
  constructor(private userService: loggedInUserService) {}
  ngOnInit(): void {
    this.userService.getData().subscribe(
      (user: User) => {
        this.userId = user.id; 
      },
      (error: any) => {
        console.error('Error Fetching User Data', error);
      }
    );
}
DeleteNews(){
  this.delete.emit(this.news.id);
}
EditNews(){
  this.edit.emit(this.news.id);
}
}
