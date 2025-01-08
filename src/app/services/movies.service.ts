import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../types/movie';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '1eec6fe95db2371dc0c142061f369b8f0';
  constructor(private http: HttpClient) {}

  getMoviesByType(type:string,count=12) {
    return this.http.get<MovieDto>(
      `${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`
    ).pipe(map((data)=>data.results.slice(0,count)))
  }
  
 

 
}
