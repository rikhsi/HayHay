import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrandsComponent } from './brands/brands.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzImageModule } from 'ng-zorro-antd/image';
import { CategoriesComponent } from './categories/categories.component';
import { TitleModule } from 'src/app/shared/title/title.module';
import { CategoryModule } from 'src/app/shared/category/category.module';
import { SwiperModule } from 'swiper/angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProductsComponent } from './products/products.component';
import { ProductModule } from 'src/app/shared/product/product.module';
import { ProductSkeletonModule } from 'src/app/shared/product-skeleton/product-skeleton.module';

@NgModule({
  declarations: [
    HomeComponent,
    BrandsComponent,
    CategoriesComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    TitleModule,
    CategoryModule,
    ProductModule,
    ProductSkeletonModule,
    NzGridModule,
    NzCardModule,
    NzSkeletonModule,
    NzListModule,
    NzImageModule,
    NzButtonModule,
    SwiperModule
  ]
})
export class HomeModule { }
