import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFood } from './food.interface';

@Injectable({
  providedIn: 'root'
})

export class FoodService {
  constructor(
    private http: HttpClient
  ) { }
s
  API_URL = 'http://localhost:3000/food';

  getAll() {
    return this.http.get<IFood[]>(this.API_URL)
  }
  update(id: number, isLiked: boolean,title:string,image:string,price:number,type:string,sale:number,newPrice:number) {
    const body = {
      id:id,
      title:title,
      price:price,
      type:type,
      image:image,
      isfavorite:isLiked,
      sale:sale,
      newPrice:newPrice
    }
    this.http.put<IFood>(this.API_URL + '/' + id,body)
      .subscribe(data=>{
          if(data.id === id){
            id = data.id
            title = data.title
            price = data.price
            type = data.type
            image = data.image
            isLiked = data.isfavorite
            sale = data.sale
            newPrice = data.newPrice
          }
      })
  }
  
}