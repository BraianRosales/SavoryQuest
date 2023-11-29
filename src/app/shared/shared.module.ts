import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../@material/material.module';
import { SpinnerComponent } from './ui/spinner/spinner.component';
@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [SpinnerComponent],
  exports: [MaterialModule, SpinnerComponent],
})
export class SharedModule {}
