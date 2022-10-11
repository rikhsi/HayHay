import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

@Component({
  selector: 'sili-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {
  title:string = 'Искать по категориям';
  categories!: Category[];
  config: SwiperOptions = {
    touchEventsTarget: 'container',
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,
    navigation: true,
    grabCursor: true
  };

  constructor(private categoriesService: CategoriesService) { 
    SwiperCore.use([Navigation]);
  }

  ngOnInit(): void {
    this.categories = this.categoriesService.categories;
  }
}
