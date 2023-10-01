import { createAction, props } from "@ngrx/store";
import { CoffeeItem } from "src/app/coffees/models/coffee-item.model";

export const initCoffeeList = createAction(
    '[Coffee] Init'
);

export const setCoffeeList = createAction(
    '[Coffee] setList',
    props<{list: CoffeeItem[]}>()
);