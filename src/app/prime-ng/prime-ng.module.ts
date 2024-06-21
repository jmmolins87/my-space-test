import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DropdownModule,
    MenubarModule,
    ProgressSpinnerModule,
    ScrollTopModule,
    SkeletonModule,
    TagModule
  ]
})
export class PrimeNgModule { }
