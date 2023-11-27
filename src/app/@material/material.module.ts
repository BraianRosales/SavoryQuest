import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  exports: [MatIconModule, MatSidenavModule, MatButtonModule, MatListModule],
})
export class MaterialModule {}
