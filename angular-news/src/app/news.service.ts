import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://blog-website-express-five.vercel.app/news/getAll'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
}
