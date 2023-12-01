import { Component, OnInit } from '@angular/core';
import { CategoriesResponse, Category } from '../../categories.model';
import { CategoriesService } from '../../categories.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoriesServices: CategoriesService,
    public spinnerService: SpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriesServices
      .getCategories()
      .subscribe((res: CategoriesResponse) => {
        this.categories = res.categories;
      });
  }

  redirectToDetail(name: string) {
    this.router.navigate([`categories/${name}`]);
  }
}
