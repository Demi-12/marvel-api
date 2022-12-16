import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatIconModule

  ],
  exports: [
    MatButtonModule,
    RouterModule,
    MatIconModule

  ]
})
export class CustomCommonModule { }
