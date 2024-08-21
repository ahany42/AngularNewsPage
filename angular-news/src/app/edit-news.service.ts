import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from './Components/api';
@Injectable({
  providedIn: 'root'
})
export class EditNews {
  private apiUrl = `${API.baseUrl}/news/edit/`; 

  constructor(private http: HttpClient) {}
  updateResource(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch(url, data);
  }
}
