import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FavoriteRecipesService } from 'src/app/core/services/favorite-recipes.service';
import { Recipe } from 'src/app/shared/shared.interfaces';
import { AlertDialogComponent } from 'src/app/shared/ui/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: Recipe[] = [];

  constructor(
    private favoriteRecipesService: FavoriteRecipesService,
    private router: Router,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.getfavorites();
  }

  deleteRecipes() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        icon: 'error_outline',
        question: 'Do you want to remove all recipes from favorites?',
      },
      width: '30%',
    });
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          dialogRef.updateSize('100%');
        } else {
          dialogRef.updateSize('30%');
        }
      });
    dialogRef.afterClosed().subscribe((bool) => {
      if (bool) {
        this.favoriteRecipesService.deleteAllRecipes();
        this.getfavorites();
      }
    });
  }

  getfavorites() {
    this.favorites = this.favoriteRecipesService.getFavoriteRecipes();
  }

  redirectToRecipeDetail(id: string) {
    this.router.navigate([`recipe/${id}`]);
  }

  handleAddOrDelete(evet: string) {
    this.getfavorites();
  }
}
