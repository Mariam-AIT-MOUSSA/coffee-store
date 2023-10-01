import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoffeeItem } from '../models/coffee-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {

  private readonly COFFEES_ENDPOINT = 'https://random-data-api.com/api/coffee/random_coffee';

  constructor(private httpClient : HttpClient) { }

  getCoffees(size: number){
    return this.httpClient.get<CoffeeItem[]>(
      this.COFFEES_ENDPOINT, 
      {params : {size : size}}
    )
  }
}
