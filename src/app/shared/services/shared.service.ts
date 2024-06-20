import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { navbarItems } from '../db/navbarItems.db';
import { countriesLanguage } from '../db/countriesLanguage.db';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private logoJson: string = 'assets/img/logo-blue.json';
  public flagJson: string = 'assets/img/flags.json';

  constructor( private _http: HttpClient ) { }

  get itemsNavbar() {
    return navbarItems;
  }

  get logoData(): Observable<any> {
    return this._http.get<any>( this.logoJson );
  }

  get countriesNavbar() {
    return countriesLanguage;
  }
}
