import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../@material/material.module';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeComponent } from './ui/recipe/recipe.component';
@NgModule({
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  declarations: [SpinnerComponent, RecipeComponent],
  exports: [MaterialModule, SpinnerComponent, RecipeComponent],
})
export class SharedModule {}
