import { ICategoria } from './../interfaces/ILibros';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private api = 'http://www.etnassoft.com/api/v1/get'; // parte fija de la URL
  private  httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
    }),
    params: new HttpParams()
  };

  constructor( private http: HttpClient) { }

  getCategorias(): Promise<ICategoria[]> {
    const url = `${this.api}`;
    const params = new HttpParams()
      .set ('get_categories', 'all');
    this.httpOptions.params = params;

    return new Promise(resolve => {
      this.http.get<ICategoria[]>(url, this.httpOptions)
      .subscribe(data => {
        resolve(data)
      })
    })
  }
}

