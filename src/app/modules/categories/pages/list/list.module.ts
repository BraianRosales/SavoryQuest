import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  declarations: [ListComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  exports: [RouterModule],
})
export class ListModule {}
