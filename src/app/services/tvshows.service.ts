import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TvshowsDto } from '../types/tvshow';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '1eec6fe95db2371dc0c142061f369b8f0';

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
}
