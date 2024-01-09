import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  addToFavorites() {
    if (this.favoriteIcon === 'favorite_border') {
      this.favoriteIcon = 'favorite';
      this.snackBar.open('Se guardo en favoritos!', 'Aceptar', {
        duration: 3000,
        panelClass: 'snackbar-succefully',
      });
    } else {
      this.favoriteIcon = 'favorite_border';
      this.snackBar.open('Se eliminó de favoritos!', 'Aceptar', {
        duration: 3000,
        panelClass: 'snackbar-delete',
      });
    }
  }

  seeDetail(id: string) {
    this.imgClick.next(id);
  }
}
