import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'http(s)://gateway.marvel.com/';

  constructor(private http: HttpClient) { }

}
