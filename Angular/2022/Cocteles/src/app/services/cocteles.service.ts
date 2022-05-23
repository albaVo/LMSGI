import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { drink } from '../interfaces/cocteles';



@Injectable({
  providedIn: 'root'
})
export class CoctelesService {

  constructor(private http: HttpClient) {}

  api_list = 'https://www.thecocktaildb.com/api/json/v1/1/list.php';
  api_drink = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';


  getAllCategories():Observable<string[]> {
    return this.http.get<any>(this.api_list+'?c=list').pipe(
      map(data => {
        let categories = data.drinks.map((x: { strCategory: any; }) => {
          return x.strCategory;
        })
        return categories;
      })
    )
  }

  getAllIngredients():Observable<string[]> {
    return this.http.get<any>(this.api_list+'?i=list').pipe(
      map(data => {
        let ingredients = data.drinks.map( (x: { strIngredient1: any; }) => {
          return x.strIngredient1;
        })
        return ingredients;
      })
    )
  }

  getDrinkById(id:string):Observable<drink>{
    return this.http.get<any>(this.api_drink+`?i=${id}`).pipe(
      map( data => {
        let drink:drink;
        drink=data.drinks[0];
        return drink;
      })
    )
  }
}
