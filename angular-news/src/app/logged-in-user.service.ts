import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class loggedInUserService {

  private apiUrl = 'http://localhost:3004/users/loggedInUser'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }
}
