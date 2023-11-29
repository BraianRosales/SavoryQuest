import { Component, OnInit } from '@angular/core';
import { CategoriesResponse, Category } from './categories.model';
import { CategoriesService } from './categories.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoriesServices: CategoriesService,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.categoriesServices
      .getCategories()
      .subscribe((res: CategoriesResponse) => {
        this.categories = res.categories;
      });
  }
}
