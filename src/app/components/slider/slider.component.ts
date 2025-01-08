import { animate, state, style, transition, trigger } from '@angular/animations';
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
  slideIndex=0
  imagesBaseUrl=imagesBaseUrl
  constructor(private movieService:MoviesService) { }
  movie$=this.movieService.getMoviesByType('popular');
  ngOnInit() {
    this.changeSlide()
  }

  changeSlide(){
    setInterval(()=>{
      this.slideIndex +=1
      if (this.slideIndex >10) {
        this.slideIndex=0        
      }
    },5000)
  }

}
