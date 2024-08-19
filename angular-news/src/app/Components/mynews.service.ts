import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MynewsService {
  private apiUrl = 'http://localhost:3004/news/myNews/3';
  constructor(private http: HttpClient) { }
  getData(): Observable<MyModel[]> {
    return this.http.get<MyModel[]>(this.apiUrl);
  }
}
