import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditNews {
  private apiUrl = 'https://blog-website-express-five.vercel.app/news/edit/'; 

  constructor(private http: HttpClient) {}
  updateResource(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch(url, data);
  }
}
