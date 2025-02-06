import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JokesService{

  private apiUrl = 'https://api.chucknorris.io/jokes/categories';

  constructor(private http: HttpClient){}

  getCategories(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  getRandomJoke(): Observable<any>{
    return this.http.get(`https://api.chucknorris.io/jokes/random`);
  }
}