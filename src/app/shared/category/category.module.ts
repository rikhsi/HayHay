import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzImageModule,
    NzButtonModule,
    NzTypographyModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
