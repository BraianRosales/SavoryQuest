import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../@material/material.module';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './ui/card/card.component';
@NgModule({
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  declarations: [SpinnerComponent, CardComponent],
  exports: [MaterialModule, SpinnerComponent, CardComponent],
})
export class SharedModule {}
