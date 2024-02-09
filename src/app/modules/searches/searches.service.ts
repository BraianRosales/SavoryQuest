import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AreasResponse } from './searches.interfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchesService {
  constructor(private http: HttpClient) {}

  searchByArea() {
    return this.http.get<AreasResponse>(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );
  }
}
