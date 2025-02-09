import { Component, Input, OnInit } from '@angular/core';
import { imagesBaseUrl } from 'src/app/constants/images-sizes';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() showItem: Movie | null = null;

  imageBaseUrl = imagesBaseUrl;

}
