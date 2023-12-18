import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full',
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./modules/favorites/favorites.module').then(
        (m) => m.FavoritesModule
      ),
  },
  {
    path: 'searches',
    loadChildren: () =>
      import('./modules/searches/searches.module').then(
        (m) => m.SearchesModule
      ),
  },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./modules/recipe/recipe.module').then((m) => m.RecipeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
