import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'sili-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  title:string = 'Популярные товары';
  products!: Category[];
  
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.products = this.categoriesService.categories;
  }

}
