import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../services/pages-services.service';

import { Tool } from '../../interfaces/tool.interface';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public tools: Tool[] = [];

  constructor( private _toolsService: PagesService ) {}

  ngOnInit(): void {
    this._toolsService.tools.subscribe(( tools: Tool[] ) => {
      this.tools = tools;
    })
  }

}
