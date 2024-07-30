import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../services/pages-services.service';

import { alertStatus } from './../../components/alert/alert.config'
import { typeSkeleton } from '../../shared/components/skeleton/skeleton.config';

import { Tool } from '../../interfaces/tool.interface';



@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public tools: Tool[] = [];
  public textAlert: string = 'No se pudo conectar a la base de datos';
  public alertStatus: alertStatus = alertStatus.DANGER;
  public isConnected!: boolean;
  public showSkeleton: boolean = false;
  public cardToolSkeleton = typeSkeleton.CARD_TOOL;

  constructor( private _toolsService: PagesService ) {
    setTimeout(() => {
      this.showSkeleton = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.importToolsEsp();
  }

  importToolsEsp() {
    this._toolsService.toolsEsp.subscribe((tools: Tool[]) => {
      this.tools = tools;
      this.showSkeleton = false;
    });
  }

}
