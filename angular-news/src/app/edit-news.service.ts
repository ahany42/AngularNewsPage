import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditNews {
  private apiUrl = 'https:http://localhost:3004/news/edit/'; // Replace with your API URL

  constructor(private http: HttpClient) {}
  updateResource(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch(url, data);
  }
}
