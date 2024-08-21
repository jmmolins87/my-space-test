import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public showNavbarFooter: boolean = true;
  
  constructor(
    private primengConfig: PrimeNGConfig, 
    private translateService: TranslateService,
    private router: Router) {
    
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
    this.translateService.setDefaultLang('en');

    // Se oculta el navbar y el footer en la página 404
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.showNavbarFooter = !['/404'].includes(event.urlAfterRedirects);
      }
    });
  }

  
  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
  }
  
}
