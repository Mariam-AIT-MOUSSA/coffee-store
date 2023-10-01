import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoffeeItem } from './models/coffee-item.model';
import { coffeeListSelector } from '../store/coffee-store/coffee.selector';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit{

  coffeeList$ : Observable<CoffeeItem[]>;
  coffeeList: CoffeeItem[] = []; 
  pagesCoffeeList: CoffeeItem[] = [];
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
    this.updatePagedData(pageIndex);
  }

  private updatePagedData(pageIndex: number): void {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagesCoffeeList = this.coffeeList.slice(startIndex, endIndex);
  }
  
}
