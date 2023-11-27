import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

interface Page {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SavoryQuest';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  pages: Page[] = [
    {
      name: 'Categories',
      icon: 'assignment',
    },
    {
      name: 'My favorites',
      icon: 'stars',
    },
    {
      name: 'Areas',
      icon: 'location_on',
    },
  ];

  links: Page[] = [
    {
      name: 'App code',
      icon: 'developer_mode',
    },
    {
      name: 'Portfolio',
      icon: 'assignment_ind',
    },
  ];

  selectedPage: string = this.pages[0].name;

  onMenuToggle(): void {
    this.sidenav.toggle();
  }

  selectPage(page: Page): void {
    this.selectedPage = page.name;
  }

  isPageSelected(page: Page): boolean {
    return this.selectedPage === page.name;
  }
}
