import { CoffeeItem } from "src/app/coffees/models/coffee-item.model";

export const coffeeListSelector = (state : {coffeeList : CoffeeItem[] }) => state.coffeeList;