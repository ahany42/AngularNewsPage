import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class loggedInUserService {

  private apiUrl = 'https://blog-website-express-five.vercel.app/users/loggedInUser'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }
}
