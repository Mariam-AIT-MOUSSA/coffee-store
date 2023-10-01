import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initCoffeeList } from './store/coffee-store/coffee.action';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private store: Store, private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer){
    matIconRegistry.addSvgIcon('coffee-store-logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/coffee-logo.svg'))
  }

  ngOnInit(){
    this.store.dispatch(initCoffeeList()); 
  }
}
