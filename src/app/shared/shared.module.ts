import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { FooterComponent } from './components/footer/footer.component';
import { LogoDisplayComponent } from './components/logo-display/logo-display.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';


@NgModule({
  declarations: [
    FooterComponent,
    LogoDisplayComponent,
    NavbarComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PrimeNgModule
  ],
  exports: [
    FooterComponent,
    LogoDisplayComponent,
    NavbarComponent,
    SkeletonComponent
  ]
})
export class SharedModule { }
