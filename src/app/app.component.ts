import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SavoryQuest';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  pages: string[] = [
    'Categories',
    'My favorites',
    'Areas',
    'App Code',
    'Portfolio',
  ];
  selectedPage: string = this.pages[0];

  onMenuToggle(): void {
    this.sidenav.toggle();
  }

  selectPage(page: string): void {
    this.selectedPage = page;
  }

  isPageSelected(page: string): boolean {
    return this.selectedPage === page;
  }
}
