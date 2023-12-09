import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../categories.service';
import {
  CategoriesResponse,
  Category,
  CategoryRecipes,
  Recipe,
} from '../../categories.model';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: Category | undefined;
  recipes!: Recipe[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ name }) => {
      this.loadCategory(name);
    });
  }

  loadCategory(name: string): void {
    this.categoriesService
      .getCategories()
      .subscribe((res: CategoriesResponse) => {
        this.category = res.categories.find(
          (category: Category) => category.strCategory === name
        );
      });

    this.categoriesService
      .getCategoryByName(name)
      .subscribe((categoryRecipes: CategoryRecipes) => {
        this.recipes = categoryRecipes.meals;
      });
  }
}
