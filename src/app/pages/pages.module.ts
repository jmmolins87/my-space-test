import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ToolComponent } from './tool/tool.component';
import { ToolsComponent } from './tools/tools.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    HomeComponent,
    ToolComponent,
    ToolsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    PagesRoutingModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class PagesModule { }
