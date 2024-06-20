import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';

import { LogoDispData } from '../../interfaces/logoDisplayData.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentYear: number = new Date().getFullYear();
  public dataLogo: LogoDispData = {
    src: '',
    alt: 'Logo jmmc',
    title: 'Logo jmmc',
    height: 60
  }

  constructor( private logoData: SharedService ) {}

  ngOnInit() {
    this.dataLogo.src = this.logoData.logoData.subscribe(( data ) => {
      this.dataLogo.src = data.image;
    });
  }

}
