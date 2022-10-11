import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandsService } from 'src/app/services/brands.service';
import { imageError } from 'src/app/services/imageError';

@Component({
  selector: 'sili-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.less']
})
export class BrandsComponent implements OnInit {
  title: string = 'Искать по брендам';
  fallback: string = imageError;
  brands!:Brand[];

  constructor(private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.brands = this.brandsService.brands;
  }
}
