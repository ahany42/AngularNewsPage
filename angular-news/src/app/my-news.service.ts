import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';
@Injectable({
  providedIn: 'root'
})
export class MyNewsService {

  private apiUrl = 'http://localhost:3004/news/myNews/3'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
}
