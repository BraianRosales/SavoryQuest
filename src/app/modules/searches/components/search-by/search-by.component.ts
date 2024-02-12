import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AreaName,
  AreasResponse,
  SearchBy,
  SearchItem,
} from '../../searches.interfaces';
import { SearchesService } from '../../searches.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-by',
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.scss'],
})
export class SearchByComponent implements OnInit {
  @Output() eventSearchBy: EventEmitter<SearchBy> =
    new EventEmitter<SearchBy>();
  searchType: 'name' | 'ingredients' | 'area' | undefined;
  searchList: SearchItem[] = [
    {
      value: 1,
      description: 'Name',
    },
    {
      value: 2,
      description: 'Areas',
    },
    {
      value: 3,
      description: 'Ingredients',
    },
  ];
  seachBy: SearchBy = {
    type: '',
    value: '',
  };
  recipeAreas: AreaName[] = [];
  nameToFindControl = new FormControl('', [Validators.required]);
  ingredientToFindControl = new FormControl('', [Validators.required]);
  areaToFind: string = '';

  // TODO: change individual formControl to formControl reactive forms

  constructor(private searchesService: SearchesService) {}

  ngOnInit(): void {}

  selectOption(item: SearchItem) {
    if (item.value === 1) {
      this.searchType = 'name';
    }
    if (item.value === 2) {
      this.searchesService.searchByArea().subscribe((areas: AreasResponse) => {
        this.recipeAreas = areas.meals;
        if (this.recipeAreas.length > 0) {
          this.searchType = 'area';
        }
      });
    }
    if (item.value === 3) {
      this.searchType = 'ingredients';
    }
  }

  selectedArea(area: string) {
    this.areaToFind = area;
  }

  sendSearchBy() {
    if (this.searchType === 'name') {
      this.seachBy = {
        type: 'name',
        value: this.nameToFindControl.value,
      };
      this.eventSearchBy.emit(this.seachBy);
    }

    if (this.searchType === 'area') {
      this.seachBy = {
        type: 'area',
        value: this.areaToFind,
      };
      this.eventSearchBy.emit(this.seachBy);
    }

    if (this.searchType === 'ingredients') {
      this.seachBy = {
        type: 'ingredients',
        value: this.ingredientToFindControl.value,
      };
      this.eventSearchBy.emit(this.seachBy);
    }
  }

  isButtonEnabled(): boolean {
    return (
      this.areaToFind !== '' ||
      this.nameToFindControl.valid ||
      this.ingredientToFindControl.valid
    );
  }
}
