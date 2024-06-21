import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ChartModule,
    DropdownModule,
    MenubarModule,
    ScrollTopModule,
    SkeletonModule,
    TagModule,
  ]
})
export class PrimeNgModule { }
