import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { Tool } from '../../interfaces/tool.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public tool!: Tool;
  public textGoBtn: string = 'Ir al sitio oficial';

  constructor() { }

  ngOnInit(): void {
    if( !this.tool ) {
      throw new Error('Attribute "tool" is required')
    }
  }

}
