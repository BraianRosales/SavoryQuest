import { Component, OnDestroy } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnDestroy {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.setToHistory({
      link: 'categories',
      title: 'Categories',
    });
  }

  ngOnDestroy(): void {
    this.navigationService.deleteRoute('Categories');
  }
}
