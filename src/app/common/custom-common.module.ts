import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule

  ],
  exports: [
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule

  ]
})
export class CustomCommonModule { }
