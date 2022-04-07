import { ICharacter } from './../interfaces/characters.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private api = 'http://gateway.marvel.com/';

  private params =
    new HttpParams()
      .set('ts', '1')
      .set('apikey', 'f752ac4dcbde02d1858064dbb5f2ecfd')
      .set('hash', '15f02b02aa52896e2d9c60f0df46bdd7')

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/jason',
    }),
    params: this.params
  };

  constructor(private http: HttpClient) { }

  async getCharacter(): Promise<ICharacter>{
    const prefix = '/v1/public/characters';
    const ts = '1';
    const apikey = 'f752ac4dcbde02d1858064dbb5f2ecfd';
    const hash = '15f02b02aa52896e2d9c60f0df46bdd7';
    const url = `${this.api}/${prefix}/${ts}/${apikey}/${hash}`
    return new Promise (resolve => {
      this.http.get<ICharacter[]>(url, this.httpOptions)
        .subscribe (data => {
          console.log(data);
          resolve(data)
        })
    })
  }
}
