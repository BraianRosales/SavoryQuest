import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Input() recipes: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToRecipeDetail(id: string) {
    this.router.navigate([`recipe/${id}`]);
  }
}
