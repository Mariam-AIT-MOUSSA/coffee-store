import { Component, ViewChild } from '@angular/core';
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
export class CoffeesComponent {

  coffeeList$ : Observable<CoffeeItem[]>;
  coffeeList : CoffeeItem[] = [];
  dataSource = new MatTableDataSource<CoffeeItem>(this.coffeeList);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  displayedColumns: string[] = ['blend_name', 'origin', 'variety', 'notes', 'intensifier'];

  constructor(private store: Store<{coffeeList : CoffeeItem[]}>){
    this.coffeeList$ = store.select(coffeeListSelector);
  }
  
  ngAfterViewInit() {
    this.coffeeList$.subscribe(data=> this.dataSource.data = data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
