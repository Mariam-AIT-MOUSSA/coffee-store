import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initCoffeeList } from './store/coffee-store/coffee.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private store: Store){}

  ngOnInit(){
    console.log('from app comp')
    this.store.dispatch(initCoffeeList()); 
  }
}
