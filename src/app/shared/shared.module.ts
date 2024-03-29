import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../@material/material.module';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './ui/card/card.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { AlertDialogComponent } from './ui/alert-dialog/alert-dialog.component';
import { ButtonComponent } from './ui/button/button.component';
import { NoResultsFoundComponent } from './ui/no-results-found/no-results-found.component';
@NgModule({
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  declarations: [
    SpinnerComponent,
    CardComponent,
    NavigationComponent,
    AlertDialogComponent,
    ButtonComponent,
    NoResultsFoundComponent,
  ],
  exports: [
    MaterialModule,
    SpinnerComponent,
    CardComponent,
    NavigationComponent,
    ButtonComponent,
    NoResultsFoundComponent,
  ],
})
export class SharedModule {}
