import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'sili-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {
  title:string = 'Искать по категориям';
  categories!: Category[];
  isLoading: boolean = true;
  config: SwiperOptions = {
    touchEventsTarget: 'container',
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,
    grabCursor: true,
    pagination:true,
  }

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.categories = this.categoriesService.categories;
      this.isLoading = false;
    }, 2000);

  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext():void{
    this.swiper?.swiperRef.slideNext(1000);
  }
  slidePrev():void{
    this.swiper?.swiperRef.slidePrev(1000);
  }
}
