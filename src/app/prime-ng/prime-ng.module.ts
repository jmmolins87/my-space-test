import { NgModule } from '@angular/core';

import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';


@NgModule({
  exports: [
    AnimateOnScrollModule,
    ButtonModule,
    CardModule,
    ChartModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    ScrollTopModule,
    SkeletonModule,
    TagModule,
    ToastModule,
  ]
})
export class PrimeNgModule { }
