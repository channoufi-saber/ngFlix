import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { mapToMovies } from 'src/app/types/tvshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private moviesService:MoviesService, private tvshowService:TvshowsService) { }
  popularMovies$=this.moviesService.getMoviesByType('popular');
  upcomingMovies$=this.moviesService.getMoviesByType('upcoming');
  topRatedMovies$=this.moviesService.getMoviesByType('top_rated');
  popularTvshows$=this.tvshowService.getTvShowsByType('popular',12).pipe(map(mapToMovies))
  ngOnInit(): void {
  }

}
