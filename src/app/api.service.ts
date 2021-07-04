import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'c9b1e9d77f744f18bbdd0de022986e52';

  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}

