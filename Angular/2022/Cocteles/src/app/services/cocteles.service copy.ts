import { ICategory, IDrinks } from '../interfaces/cocteles';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoctelesService {

  private api = 'http://www.thecocktaildb.com/api/json/v1/1';
  private  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':'*',
      'Access-Control-Allow-Origin' : '*',
    }),
    params: new HttpParams()
  };

  constructor(private http: HttpClient) { }

  getCategories(): Promise<ICategory[]> {
    const url = `${this.api}/list.php`;
    const params = new HttpParams()
      .set('c','list');
    this.httpOptions.params = params;
    console.log(url, this.httpOptions);

    return new Promise(resolve => {
      this.http.get<ICategory[]> (url, this.httpOptions)
      .subscribe (data => {
        console.log(data);
        resolve(data)
      })
    })
  }

  getDrinksCategory(nCat: string): Promise<IDrinks[]> {
    const url = `${this.api}/filter.php`;
    const params = new HttpParams()
      .set('c', nCat);

    return new Promise(resolve => {
      this.http.get<IDrinks[]> (url)
      .subscribe (data => {
        console.log(data);
        resolve(data)
      })
    })
  }

  getGlasses(): Promise<IDrinks[]> {
    const url = `${this.api}/search.php`;
    const params = new HttpParams()
      .set ('s', 'all');

    return new Promise(resolve => {
      this.http.get<IDrinks[]>(url)
      .subscribe (data => {
        console.log(data);
        resolve(data)
      })
    })
  }
}
