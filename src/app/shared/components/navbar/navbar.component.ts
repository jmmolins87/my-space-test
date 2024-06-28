import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';       

import { SharedService } from '../../services/shared.service';

import { CountriesLanguage } from '../../interfaces/countriesNavbar.interface';
import { LogoDispData } from '../../interfaces/logoDisplayData.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public items: MenuItem[] | undefined;
  public countries: CountriesLanguage[] | undefined;
  public selectedCountry: CountriesLanguage | undefined;
  public dataLogo: LogoDispData = {
    src: '',
    alt: 'Logo jmmc',
    title: 'Logo jmmc',
    height: 30
  };

  constructor( 
    private itemsNavbar: SharedService,
    private countriesNavbar: SharedService,
    private logoData: SharedService
  ) {}

  ngOnInit() {
    this.items = this.itemsNavbar.itemsNavbar;
    this.countries = this.countriesNavbar.countriesNavbar;
    this.dataLogo.src = this.logoData.logoData.subscribe(( data ) => {
      this.dataLogo.src = data.image;
    });
  }

}
