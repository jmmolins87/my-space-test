import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { LogoDispData } from '../../interfaces/logoDisplayData.interface';

@Component({
  selector: 'app-logo-display',
  templateUrl: './logo-display.component.html',
  styleUrls: ['./logo-display.component.scss']
})
export class LogoDisplayComponent implements OnInit {

  @Input() 
  public data!: LogoDispData;

  constructor( ) {}

  ngOnInit(): void { }

}
