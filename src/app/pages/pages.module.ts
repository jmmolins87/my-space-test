import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PagesRoutingModule } from './pages-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ComponentsModule } from '../components/components.module';

import { AboutComponent } from './about/about.component';
import { ToolsComponent } from './tools/tools.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ToolComponent } from './tool/tool.component';


@NgModule({
  declarations: [
    AboutComponent,
    ToolsComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent,
    ToolComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule,
    PrimeNgModule,
    ComponentsModule
  ]
})
export class PagesModule { }
