import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/screens/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './components/ui/layout/layout.module';
import { SaleComponent } from './components/screens/sale/sale.component';
import { FavoriteComponent } from './components/screens/favorite/favorite.component';
import { ProfileComponent } from './components/screens/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodItemComponent } from './components/screens/home/food-item/food-item.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/screens/home/search/search.component';
import { FiltersComponent } from './components/screens/home/filters/filters.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { ItemComponent } from './components/screens/home/item/item.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaleComponent,
    FavoriteComponent,
    ProfileComponent,
    FoodItemComponent,
    SearchComponent,
    FiltersComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
