import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { PagesService } from './../../services/pages-services.service';

import { typeSkeleton } from './../../shared/components/skeleton/skeleton.config';

import { Tool } from './../../interfaces/tool.interface';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  public tool!: Tool;
  public textBtnBack: string = 'Volver a la lista de herramientas';
  public textGoBtn: string = 'Ir al sitio oficial';
  public toolSkeleton = typeSkeleton.TOOL; 
  public showSkeleton: boolean = false;

  constructor( 
    private _router: Router,
    private _toolById: PagesService, 
    private _activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.showSkeleton = true, 2000);
    this.routeActive();
  }

  routeActive() {
    this._activatedRoute.params.pipe(
      switchMap(({ id }) => this._toolById.getToolByIdEsp(id))
    ).subscribe(tool => {
      if (!tool) return this._router.navigate(['/404']);

      this.tool = tool;
      this.showSkeleton = false;
      return;
    })
  }

  goBack() {
    this._router.navigate(['/tools']); 
  }

}
