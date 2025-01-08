import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/types/movie';
import { Tvshow } from 'src/app/types/tvshow';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() shows:Movie[]=[]

  @Input() title=''

  ngOnInit(): void {
  }

}
