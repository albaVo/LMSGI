import { ICategoria, ILibro } from './../interfaces/ILibros';
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
    // headers y parametros de la REQUEST
    const url = `${this.api}`;
    const params = new HttpParams()
      .set ('get_categories', 'all');
    this.httpOptions.params = params;

    // PROGRAMAR el SEND de la PETICION
    return new Promise(resolve => {
      this.http.get<ICategoria[]>(url, this.httpOptions)
      .subscribe(data => {
        resolve(data)
      })
    })
  }

  getLibrosCategoria(idCat: number) {
    const url = `${this.api}`;
    const params = new HttpParams()
      .set('category_id', idCat);
    this.httpOptions.params = params;

    return new Promise(resolve => {
      this.http.get<ILibro[]>(url, this.httpOptions)
      .subscribe(data => { // recibo la RESPONSE
        console.log(data);
        resolve(data)
      })
    })
  }


}

