import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { imageError } from 'src/app/services/imageError';

@Component({
  selector: 'sili-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  fallback: string = imageError; 

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
