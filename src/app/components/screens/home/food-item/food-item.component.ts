import { Component, Input,OnInit } from '@angular/core';
import { IFood } from 'src/app/services/food/food.interface';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {
  
  @Input() food: IFood
  newPrice:any
  ngOnInit(): void {
    this.newPrice = (this.food.price * this.food.sale)/100
    this.food.newPrice = this.food.price-this.newPrice
  }
}
