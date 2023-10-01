import { createReducer, on } from "@ngrx/store";
import { CoffeeItem } from "src/app/coffees/models/coffee-item.model";
import { setCoffeeList } from "./coffee.action";

const initialCoffeeList : CoffeeItem[] = [];

export const coffeeListReducer = createReducer(
    initialCoffeeList, 
    on(setCoffeeList, (state, action) => action.list)
);