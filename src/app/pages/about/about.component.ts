import { Component } from '@angular/core';

import { typeSkeleton } from '../../shared/components/skeleton/skeleton.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public title: string = 'Sobre mi';
  public showSkeleton: boolean = false;
  public titleSkeleton = typeSkeleton.TITLE;  

  constructor() {
    setTimeout(() => {
      this.showSkeleton = true;
    }, 2000);
  }

}
