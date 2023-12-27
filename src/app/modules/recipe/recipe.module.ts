import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'id',
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: RecipeComponent,
  },
];

@NgModule({
  declarations: [RecipeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class RecipeModule {}
