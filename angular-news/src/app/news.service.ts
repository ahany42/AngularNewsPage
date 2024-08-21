import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';
import { API } from './Components/api';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = `${API.baseUrl}news/getAll`; 

  constructor(private http: HttpClient) { }

  getData(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
}
