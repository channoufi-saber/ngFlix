import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '1eec6fe95db2371dc0c142061f369b8f0';
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    );
  }
}
