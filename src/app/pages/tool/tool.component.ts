import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { PagesService } from '../../services/pages-services.service';

import { Tool } from '../../interfaces/tool.interface';

import { typeSkeleton } from '../../shared/components/skeleton/skeleton.config';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  public tool?: Tool;
  public textBtnBack: string = 'Volver';
  public toolSkeleton = typeSkeleton.TOOL;

  constructor( 
    private _router: Router,
    private _toolById: PagesService, 
    private _activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(
      switchMap(({ id }) => this._toolById.getToolById( id ))
    ).subscribe( tool => {
      if( !tool) return this._router.navigate(['/404']);

      this.tool = tool;
      return;
    })
  }

  goBack() {
    this._router.navigate(['/tools']); 
  }

}
