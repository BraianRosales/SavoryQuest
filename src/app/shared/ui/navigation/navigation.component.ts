import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { NavigationRoute } from './navigation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(
    public navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  selectPage(route: NavigationRoute): void {
    this.router.navigate([`/${route.link}`]);
  }
}
