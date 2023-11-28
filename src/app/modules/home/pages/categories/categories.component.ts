import { Component, OnInit } from '@angular/core';
import { CategoriesResponse, Category } from './categories.model';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoriesServices: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesServices
      .getCategories()
      .subscribe((res: CategoriesResponse) => {
        this.categories = res.categories;
      });
  }
}
