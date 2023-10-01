import { Component, Input } from '@angular/core';
import { CoffeeItem } from '../models/coffee-item.model';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.css']
})
export class CoffeeItemComponent {

  @Input() coffeeItem! : CoffeeItem; 

}
