import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/types/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent implements OnInit {

  showsList$: Observable<Movie[]> | null = null;
  searchValue: any;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagesShows(1);
  }

  getPagesShows(page: number, searchKeyword?: string) {
    this.showsList$ = this.moviesService.searchMovies(1, this.searchValue);
  }

  searchChanged() {
    this.getPagesShows(1, this.searchValue);
  }

  pageChanged(event: any) {
console.log(event)   
 }
}
