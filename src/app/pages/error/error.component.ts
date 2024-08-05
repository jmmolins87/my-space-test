import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PagesService } from './../../services/pages-services.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public linkAnimation: string = '';
  public textInfo: string = '¡¡Este no es el camino correcto!!';
  public textButton: string = 'Volvamos a empezar';

  constructor( private animationError: PagesService, private _route: Router ) {}

  ngOnInit(): void {
    this.animationError.error.subscribe( animation => {
      this.linkAnimation = animation.gif_data;
    })
  }

  goBack() {
    this._route.navigate(['/']);
  }

}


