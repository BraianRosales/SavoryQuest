import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './areas.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AreasComponent,
  },
];

@NgModule({
  declarations: [AreasComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AreasModule {}
