import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchesComponent } from './searches.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchByComponent } from './components/search-by/search-by.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SearchesComponent,
  },
];

@NgModule({
  declarations: [SearchesComponent, SearchByComponent, SearchResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class SearchesModule {}
