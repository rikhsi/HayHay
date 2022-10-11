import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { imageError } from 'src/app/services/imageError';

@Component({
  selector: 'sili-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
  fallback: string = imageError; 
  @Input() category!: Category;

  constructor() { }

  ngOnInit(): void {}

}
