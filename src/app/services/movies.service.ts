import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieDto } from '../types/movie';
import { map } from 'rxjs';
import { VideosDto } from '../types/video';
import { ImagesDto } from '../types/image';
import { CreditsDto } from '../types/credits';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '1eec6fe95db2371dc0c142061f369b8f';
  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 12) {
    return this.http
      .get<MovieDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getMovieVideos(id: string) {
    return this.http.get<VideosDto>(
      `${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`
    ).pipe(map((data)=>data.results));
  }

  getMovieImages(id: string) {
    return this.http
      .get<ImagesDto>(
        `${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.backdrops));
  }

  getMovieCast(id: string) {
    return this.http
      .get<CreditsDto>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast));
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<MovieDto>(
        `${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, 12)));
  }
}
