import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/modules/categories/categories.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() imgClick: EventEmitter<string> = new EventEmitter<string>();

  favoriteIcon: string = 'favorite_border';

  constructor() {}

  ngOnInit(): void {}

  addToFavorites() {
    this.favoriteIcon === 'favorite_border'
      ? (this.favoriteIcon = 'favorite')
      : (this.favoriteIcon = 'favorite_border');
  }

  seeDetail(id: string) {
    this.imgClick.next(id);
  }
}
