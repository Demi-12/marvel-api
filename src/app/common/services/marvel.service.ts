import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { md5 } from '../helpers/md5';
import { MarvelCharacter } from '../models/marvelCharacter';
import { MarvelFilters, MarvelResponse } from '../models/marvelApi';
import { ApiService } from './api.service';




@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  ts: string = '';
  PUBLIC_API_KEY: string = '9de4a5ad4c646e030b7ba800c4beab87';
  PRIVATE_API_KEY: string = 'd466ac929799fcb24accc322d3b6f24bf5fa4377';
  URI: string = "https://gateway.marvel.com:443/v1/public/";

  constructor(private apiService: ApiService) { }

  marvelGet(url: string, filters?: any): Observable<MarvelResponse<any>> {
    this.ts = new Date().toISOString();
    const hash = md5(this.ts + this.PRIVATE_API_KEY + this.PUBLIC_API_KEY);
    console.log(filters)
    let final_url = `${url}?ts=${this.ts}&apikey=${this.PUBLIC_API_KEY}&hash=${hash}`;
    if (filters) {
      Object.keys(filters as any).forEach((filter_key: any) => {
        if (filters[filter_key]) {
          final_url += `&${filter_key}=${filters[filter_key]}`
        }

      })
    }
    return this.apiService.get(final_url);
  }

  //Characters

  getAllCharacters(filters?: MarvelFilters): Observable<MarvelResponse<MarvelCharacter[]>> {
    const url = this.URI + "characters";
    return this.marvelGet(url, filters);
  }

  getCharacterById(id: string, filter?: string): Observable<MarvelResponse<MarvelCharacter>> {
    let url = this.URI + "characters/" + id;
    if (filter) {
      url += filter;
    }
    return this.marvelGet(url);
  }

}
