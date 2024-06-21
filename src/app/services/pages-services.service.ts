import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environments } from '../../environments/environments.prod';

import { Tool } from '../interfaces/tool.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private errorJson: string = '';
  private baseUrl: string = environments.baseUrl;

  constructor( private _http: HttpClient ) { }

  get error(): Observable<any> {
    return this._http.get<any>( this.errorJson );
  }

  get tools(): Observable<Tool[]> {
    return this._http.get<Tool[]>( `${ this.baseUrl }/tools` );
  }

  getToolById( id: string ): Observable<Tool | undefined> {
    return this._http.get<Tool | undefined>( `${ this.baseUrl }/tools/${ id }`)
  }

  checkConnection(): Observable<boolean> {
    return this._http.get<boolean>(this.baseUrl)
      .pipe(
        catchError(err => {
          console.log('Error en el servidor', err);
          return of(false);
        })
      )
  }

}
