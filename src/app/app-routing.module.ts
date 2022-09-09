import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './components/screens/favorite/favorite.component';
import { HomeComponent } from './components/screens/home/home.component';
import { ItemComponent } from './components/screens/home/item/item.component';
import { ProfileComponent } from './components/screens/profile/profile.component';
import { SaleComponent } from './components/screens/sale/sale.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },{
    path:'sale',component:SaleComponent
  },{
    path:'favorites',component:FavoriteComponent
  },{
    path:'profile',component:ProfileComponent
  },{
    path:'item/:id',
    component:ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
