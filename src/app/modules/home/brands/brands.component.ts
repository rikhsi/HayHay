import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sili-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.less']
})
export class BrandsComponent implements OnInit {

  brands = [
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: '1234 товара'
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: '1234 товара'
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: '1234 товара'
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: '1234 товара'
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: '1234 товара'
    },
    {
      img: '../../../../assets/img/brand.png',
      title: 'Tesla',
      amount: '1234 товара'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
