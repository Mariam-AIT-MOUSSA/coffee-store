import { Injectable } from "@angular/core"; 
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { initCoffeeList, setCoffeeList } from "./coffee.action";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { CoffeesService } from "src/app/coffees/services/coffees.service";

@Injectable()
export class CoffeeEffect {

    loadCoffeeListFromServer$ = createEffect(() =>
      this.actions$.pipe(
        ofType(initCoffeeList),
        switchMap(() =>
          this.coffeeService.getCoffees(50).pipe(
            map(coffeeList => setCoffeeList({ list: coffeeList }))
          )
        )
      )
    );
  
    constructor(private actions$: Actions, private coffeeService: CoffeesService) { }
}  