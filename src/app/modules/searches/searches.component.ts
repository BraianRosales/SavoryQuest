import { Component, OnInit } from '@angular/core';
import { SearchBy } from './searches.interfaces';
import { SearchesService } from './searches.service';
import { FullRecipeReponse } from '../recipe/recipe.model';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss'],
})
export class SearchesComponent implements OnInit {
  fullRecipeReponse!: FullRecipeReponse;

  constructor(
    private searchesService: SearchesService,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {}

  eventSearchBy(searchBy: SearchBy) {
    switch (searchBy.type) {
      case 'name':
        this.getRecipesByName(searchBy.value);
        break;
      case 'area':
        this.getRecipesByArea(searchBy.value);
        break;
      case 'ingredients':
        this.getRecipesByIngredient(searchBy.value);
        break;
    }
  }

  getRecipesByName(value: string) {
    this.searchesService
      .searchByName(value)
      .subscribe((res: FullRecipeReponse) => {
        this.fullRecipeReponse = res;
      });
  }

  getRecipesByArea(value: string) {
    this.searchesService
      .searchByArea(value)
      .subscribe((res: FullRecipeReponse) => {
        this.fullRecipeReponse = res;
      });
  }

  getRecipesByIngredient(value: string) {
    this.searchesService
      .searchByIngredient(value)
      .subscribe((res: FullRecipeReponse) => {
        this.fullRecipeReponse = res;
      });
  }
}
