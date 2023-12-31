import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {}
