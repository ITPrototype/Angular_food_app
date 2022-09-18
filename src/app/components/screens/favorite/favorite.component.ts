import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(
    private fservice: FoodService
  ) { }
  favourite = []
  newPrice:any
  ngOnInit(): void {
    this.fservice.getAll().subscribe(data => {
      data.map(product => {
        if (product.isfavorite === true) {
          this.newPrice = (product.price*product.sale)/100
          product.newPrice = product.price - this.newPrice
          this.favourite.push(product)
        }
      })
    })
    
  }

}
