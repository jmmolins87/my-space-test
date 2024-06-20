import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoDisplayComponent } from './components/logo-display/logo-display.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LogoDisplayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PrimeNgModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LogoDisplayComponent
  ]
})
export class SharedModule { }
