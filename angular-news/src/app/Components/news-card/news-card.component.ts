import { Component,Input } from '@angular/core';
import { News } from 'src/app/news';
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent{
  @Input() news!:News;
}
