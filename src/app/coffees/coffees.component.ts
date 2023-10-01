import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoffeeItem } from './models/coffee-item.model';
import { coffeeListSelector } from '../store/coffee-store/coffee.selector';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit{

  coffeeList$ : Observable<CoffeeItem[]>;
  coffeeList: CoffeeItem[] = []; 
  pagedCoffeeList: CoffeeItem[] = [];
  pageSize = 5;

  constructor(private store: Store<{coffeeList : CoffeeItem[]}>){
    this.coffeeList$ = store.select(coffeeListSelector);
  }
  ngOnInit(){
    this.coffeeList$.subscribe(data=> {
      this.coffeeList = data;
      this.updatePagedData(0);
    }); 
  }

  onPageChange(event: any): void {
    const pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData(pageIndex);
  }

  private updatePagedData(pageIndex: number): void {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedCoffeeList = this.coffeeList.slice(startIndex, endIndex);
  }
  
}
