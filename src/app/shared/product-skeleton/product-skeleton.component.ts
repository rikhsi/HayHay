import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-product-skeleton',
  templateUrl: './product-skeleton.component.html',
  styleUrls: ['./product-skeleton.component.less']
})
export class ProductSkeletonComponent implements OnInit {
  @Input() counter!: number;
  skeleton: any[] = [];

  constructor() { }
  
  ngOnInit(): void {
    this.skeleton = this.skeleton.concat([...Array(this.counter)]);
  }
}
