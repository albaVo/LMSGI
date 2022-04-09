import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  api_key = 'f752ac4dcbde02d1858064dbb5f2ecfd';
  hash = '15f02b02aa52896e2d9c60f0df46bdd7';
  url1 = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.api_key}&hash=${this.hash}`;
  url2 = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.api_key}&hash=${this.hash}`;
  url3 = `http://gateway.marvel.com/v1/public/events?ts=1&apikey=${this.api_key}&hash=${this.hash}`;
  url4 = `http://gateway.marvel.com/v1/public/series?ts=1&apikey=${this.api_key}&hash=${this.hash}`;
  url5 = `http://gateway.marvel.com/v1/public/stories?ts=1&apikey=${this.api_key}&hash=${this.hash}`;

 constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.url1)
      .pipe(map((data: any) => data.data.results))
  }

  getComics(): Observable<any> {
    return this.http.get<any>(this.url2)
    .pipe(map((data: any) => data.data.results))
  }

  getEvents(): Observable<any> {
    return this.http.get<any>(this.url3)
    .pipe(map((data: any) => data.data.results))
  }

  getSeries(): Observable<any> {
    return this.http.get<any>(this.url4)
    .pipe(map((data: any) => data.data.results))
  }

  getStories(): Observable<any> {
    return this.http.get<any>(this.url5)
    .pipe(map((data: any) => data.data.results))
  }
}

