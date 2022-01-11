import { Injectable } from '@angular/core';
import { Data } from '../types';
import { data } from '../data'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<Data[]> {
    const Stock = of(data);
    return Stock;
  }
}
