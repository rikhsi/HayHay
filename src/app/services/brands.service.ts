import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  brands: Brand[] = [
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: 1234
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: 1234
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: 1234
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: 1234
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: 1234
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: 1234
    }
  ]

  constructor() { }
}
