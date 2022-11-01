import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  // comic?: any;
  // comics?: any;

  constructor(private http: HttpClient) { }

  getComics() {
    return this.http.get("http://localhost:3000/comics")
  }
}
