import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './areas.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AreasComponent,
  },
];

@NgModule({
  declarations: [AreasComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AreasModule {}
