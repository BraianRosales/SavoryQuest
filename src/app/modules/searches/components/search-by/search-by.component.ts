import { Component, OnInit } from '@angular/core';
import { AreaName, AreasResponse, SearchItem } from '../../searches.interfaces';
import { SearchesService } from '../../searches.service';

@Component({
  selector: 'app-search-by',
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.scss'],
})
export class SearchByComponent implements OnInit {
  searchList: SearchItem[] = [
    {
      value: 1,
      description: 'Name',
    },
    {
      value: 2,
      description: 'Areas',
    },
  ];

  recipeAreas: AreaName[] = [];

  constructor(private searchesService: SearchesService) {}

  ngOnInit(): void {}

  selectOption(item: SearchItem) {
    if (item.value === 2) {
      this.searchesService.searchByArea().subscribe((areas: AreasResponse) => {
        this.recipeAreas = areas.meals;
        // TODO: I have to save the  recipe areas in a new select component.
      });
    }
  }
}
