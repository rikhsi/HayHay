import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSkeletonComponent } from './product-skeleton.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@NgModule({
  declarations: [
    ProductSkeletonComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzSkeletonModule
  ],
  exports: [
    ProductSkeletonComponent
  ]
})
export class ProductSkeletonModule { }
