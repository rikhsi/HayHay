import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'sili-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  title:string = 'Популярные товары';
  products!: Product[];
  loading:boolean = false;
  skeleton: any[] = [];

  constructor(private productsService: ProductsService) {
    this.skeleton = this.skeleton.concat([...Array(12)]);
  }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.products = this.productsService.products;
      this.loading = false;
    }, 2000);
  }
}
