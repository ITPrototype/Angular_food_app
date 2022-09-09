import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { FoodService } from 'src/app/services/food/food.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  id: number;
  title: string;
  price: number;
  image: string;
  isfav: boolean
  icon: string = 'favorite_border'
  API: string = 'http://localhost:3000/food'
  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  changeIcon() {
    if (this.isfav === false) {
      this.isfav = true
      this.icon = 'favorite'
      this.fservice.update(this.id, this.isfav)
    } else {
      this.isfav = false
      this.icon = 'favorite_border'
      this.fservice.update(this.id, this.isfav)
    }
    console.log('Click change:', this.isfav);
  }
  constructor(
    private route: ActivatedRoute,
    private fservice: FoodService,
  ) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.title = queryParam['title'];
        this.price = queryParam['price'];
        this.image = queryParam['img'];
        this.isfav = queryParam['isfavorite'];
      }
    )
  }
  order() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Buyurtmangiz qabul qilindi',
      showConfirmButton: false,
      timer: 1500
    })
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => this.id = +data);

    this.fservice.getAll().subscribe(data => {
      this.isfav = data[this.id].isfavorite
      if (this.isfav === true) {
        this.isfav = true
        this.icon = 'favorite'
        this.fservice.update(this.id, this.isfav)
      } else {
        this.isfav = false
        this.icon = 'favorite_border'
        this.fservice.update(this.id, this.isfav)
      }
    })

  }
  ngOnChanges() {
    this.fservice.getAll().subscribe(data => {
      data[this.id].isfavorite
    })
  }

}
