import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Category[] = [
    {
      img: '../../../assets/img/category.png',
      title: 'Ноутбуки, моноблоки, игровые приставки sssssssssssss',
      amount: 1234
    },
    {
      img: '../../../assets/img/category.png',
      title: 'Телефоны и планшеты',
      amount: 1234
    },
    {
      img: '../../../assets/img/category.png',
      title: 'Телефоны и планшеты',
      amount: 1234
    },
    {
      img: '../../../assets/img/category.png',
      title: 'Телефоны и планшеты',
      amount: 1234
    },
    {
      img: '../../../assets/img/category.png',
      title: 'Телефоны и планшеты',
      amount: 1234
    },
    {
      img: '../../../assets/img/category.png',
      title: 'Телефоны и планшеты',
      amount: 1234
    }
  ]
  
  constructor() { }
}
