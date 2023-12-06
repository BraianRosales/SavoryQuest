import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchesComponent } from './searches.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SearchesComponent,
  },
];

@NgModule({
  declarations: [SearchesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SearchesModule {}
