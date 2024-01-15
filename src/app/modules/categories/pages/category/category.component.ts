import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../categories.service';
import {
  CategoriesResponse,
  Category,
  CategoryRecipes,
} from '../../categories.model';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { NavigationRoute } from 'src/app/shared/ui/navigation/navigation.model';
import { Recipe } from 'src/app/shared/shared.interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  category: Category | undefined;
  recipes!: Recipe[];
  mealName!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    public spinnerService: SpinnerService,
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ name }) => {
      this.mealName = name;
      this.loadCategory(name);
      this.navigationService.setToHistory({
        link: `categories/${name}`,
        title: name,
      });
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

  redirectToRecipeDetail(id: string) {
    this.router.navigate([`recipe/${id}`]);
  }

  ngOnDestroy(): void {
    this.navigationService.deleteRoute(this.mealName);
  }
}
