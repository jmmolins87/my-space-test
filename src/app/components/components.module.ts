import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PipesModule } from '../pipes/pipes.module';

import { CardComponent } from './card/card.component';
import { AlertComponent } from './alert/alert.component';
import { ChartComponent } from './chart/chart.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    CardComponent,
    AlertComponent,
    ChartComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PipesModule
  ],
  exports: [
    CardComponent,
    AlertComponent,
    ChartComponent,
    TitleComponent
  ]
})
export class ComponentsModule { }
