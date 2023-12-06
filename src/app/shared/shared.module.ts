import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../@material/material.module';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  declarations: [SpinnerComponent],
  exports: [MaterialModule, SpinnerComponent],
})
export class SharedModule {}
