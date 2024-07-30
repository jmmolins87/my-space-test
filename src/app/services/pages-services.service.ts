import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environments } from './../../environments/environments';

import { Tool } from './../interfaces/tool.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private errorJson!: string;
  private baseUrl: string = environments.baseUrl;

  constructor( private _http: HttpClient ) { }

  get error(): Observable<any> {
    return this._http.get<any>( this.errorJson );
  }

  // Datos en Español
  get toolsEsp(): Observable<Tool[]> {
    return this._http.get<Tool[]>( `${ this.baseUrl }/tools_esp.json` );
  }

  getToolByIdEsp( id: string ): Observable<Tool | undefined> {
    return this._http.get<Tool | undefined>( `${ this.baseUrl }/tools_esp/${ id }.json`)
  }

}
