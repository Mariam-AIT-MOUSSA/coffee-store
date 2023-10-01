import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoffeesComponent } from './coffees/coffees.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { coffeeListReducer } from './store/coffee-store/coffee.reducer';
import { CoffeeEffect } from './store/coffee-store/coffee.effect';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CoffeeItemComponent } from './coffees/coffee-item/coffee-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeesComponent,
    HeaderComponent,
    FooterComponent,
    CoffeeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      coffeeList : coffeeListReducer
    }),
    EffectsModule.forRoot([
      CoffeeEffect
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
