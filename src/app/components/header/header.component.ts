import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/models/catalog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;
  catalogs: Catalog[] = [
    {
      img: '../../../assets/img/catalog.png',
      title: 'Телефоны и планшеты'
    },
    {
      img: '../../../assets/img/catalog.png',
      title: 'Телефоны и планшеты'
    },
    {
      img: '../../../assets/img/catalog.png',
      title: 'Телефоны и планшеты'
    },
    {
      img: '../../../assets/img/catalog.png',
      title: 'Телефоны и планшеты'
    },
    {
      img: '../../../assets/img/catalog.png',
      title: 'Ноутбуки, моноблоки, игровые приставки'
    },
    {
      img: '../../../assets/img/catalog.png',
      title: 'Телефоны и планшеты'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
