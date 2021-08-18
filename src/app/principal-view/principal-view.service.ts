import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/operators';
import  *  as  data  from  './data.json';


@Injectable({
  providedIn: 'root'
})
export class PrincipalViewService {

  constructor(
    private http: HttpClient
  ) { }


  /**
   * Servicio mock utilizando rxjs observable y operador map de rxjs
   * @returns 
   */
  serviceMock() {
    return of(data).pipe(map(result => {
      return result.mockDataCars
    }));
  }
}
