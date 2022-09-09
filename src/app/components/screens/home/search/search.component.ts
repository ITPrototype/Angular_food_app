import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFood } from 'src/app/services/food/food.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() findFoods = new EventEmitter<{
    searchTerm: string
  }>();
  searchTerm: string = ''

  handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.findFoods.emit({ searchTerm: this.searchTerm })
    }
  }
}
