import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, SharedModule, CategoriesRoutingModule],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
