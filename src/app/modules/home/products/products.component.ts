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
  isLoading:boolean = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.products = this.productsService.products;
      this.isLoading = false;
    }, 2000);
  }
}
