import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'sili-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;
  categories!: Category[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.categories;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
