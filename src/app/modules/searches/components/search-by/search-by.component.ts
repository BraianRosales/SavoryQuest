import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AreaName,
  AreasResponse,
  SearchBy,
  SearchItem,
} from '../../searches.interfaces';
import { SearchesService } from '../../searches.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  searchBy: SearchBy = {
    type: '',
    value: '',
  };
  recipeAreas: AreaName[] = [];
  searchByForm!: FormGroup;

  constructor(
    private searchesService: SearchesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchByForm = this.fb.group({
      name: ['', [Validators.required]],
      area: ['', [Validators.required]],
      ingredient: ['', [Validators.required]],
    });
  }

  get name() {
    return this.searchByForm.get('name');
  }

  get area() {
    return this.searchByForm.get('area');
  }

  get ingredient() {
    return this.searchByForm.get('ingredient');
  }

  selectOption(item: SearchItem) {
    this.searchByForm.reset();
    if (item.value === 1) {
      this.searchType = 'name';
    }
    if (item.value === 2) {
      this.searchesService.getAllAreas().subscribe((areas: AreasResponse) => {
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

  onSubmit() {
    if (this.searchType === 'name') {
      this.searchBy = {
        type: 'name',
        value: this.name?.value,
      };
      this.eventSearchBy.emit(this.searchBy);
    }

    if (this.searchType === 'area') {
      this.searchBy = {
        type: 'area',
        value: this.area?.value,
      };
      this.eventSearchBy.emit(this.searchBy);
    }

    if (this.searchType === 'ingredients') {
      this.searchBy = {
        type: 'ingredients',
        value: this.ingredient?.value,
      };
      this.eventSearchBy.emit(this.searchBy);
    }
  }

  isButtonEnabled(): boolean | undefined {
    return this.area?.valid || this.name?.valid || this.ingredient?.valid;
  }
}
