import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sili-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less']
})
export class TitleComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

