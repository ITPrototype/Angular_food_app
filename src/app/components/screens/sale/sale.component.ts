import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  constructor(
    private foodService: FoodService
  ) { }
  foods = []
  ngOnInit(): void {
    this.foodService.getAll().subscribe(data => {
      data.map(product => {
        if (product.sale) {
          let sale = (product.price * product.sale) / 100
          product.newPrice = product.price-sale
          this.foods.push(product)
        }
      })
    })
  }
}
