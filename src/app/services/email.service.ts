import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _url = 'http://localhost:3000/send-email';

  constructor( private _http:HttpClient ) { }

  sendEmail( data: any ): Observable<any> {
    return this._http.post<any>(this._url, data);
  }

}
