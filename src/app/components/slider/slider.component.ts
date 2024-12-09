import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { imagesBaseUrl } from 'src/app/constants/images-sizes';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  slideIndex = 0;
  slides: any;
  imagesBaseUrl = imagesBaseUrl;
  constructor(private moviesService: MoviesService) {}
  movies$ = this.moviesService.getPopularMovies();

  ngOnInit() {
    this.changeSlide();
  }

  private changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex) {
        this.slideIndex = 0;
      }
    }, 40000);
  }
}
