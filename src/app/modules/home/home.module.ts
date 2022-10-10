import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrandsComponent } from './brands/brands.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [
    HomeComponent,
    BrandsComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzSkeletonModule,
    NzListModule,
    NzImageModule
  ]
})
export class HomeModule { }
