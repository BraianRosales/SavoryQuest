import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Page } from './app.model';
import { Router } from '@angular/router';

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
      route: 'categories',
    },
    {
      name: 'My favorites',
      icon: 'favorite',
      route: 'favorites',
    },
    {
      name: 'Search by',
      icon: 'search',
      route: 'searches',
    },
  ];

  links: Page[] = [
    {
      name: 'App code',
      icon: 'developer_mode',
      route: 'https://github.com/BraianRosales/SavoryQuest',
    },
    // {
    //   name: 'Portfolio',
    //   icon: 'assignment_ind',
    //   route: 'https://portfoliobradev.netlify.app/',
    // },
  ];
  selectedPage: string = this.pages[0].name;

  constructor(private router: Router) {}

  onMenuToggle(): void {
    this.sidenav.toggle();
  }

  selectPage(page: Page): void {
    this.selectedPage = page.name;
    this.router.navigate([`/${page.route}`]);
    this.sidenav.toggle();
  }

  isPageSelected(page: Page): boolean {
    return this.selectedPage === page.name;
  }

  redirectToLink(route: string): void {
    window.open(route, '_blank');
  }
}
