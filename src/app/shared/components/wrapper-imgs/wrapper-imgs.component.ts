import { 
  Component, 
  Input, 
  OnInit, 
  SimpleChanges
} from '@angular/core';
import { 
  DomSanitizer, 
  SafeUrl 
} from '@angular/platform-browser';

import { CustomWrapperImg } from '../../interfaces/customWrapperImg.interface';

@Component({
  selector: 'app-wrapper-imgs',
  templateUrl: './wrapper-imgs.component.html',
  styleUrls: ['./wrapper-imgs.component.scss']
})
export class WrapperImgsComponent implements OnInit {

  @Input() 
  public customImg: CustomWrapperImg = {
    src:  '',
    alt:  '',
    title:  '',
    width:  'auto',
    height:  'auto',
    cssClass:  ''
  }

  public sanitizedUrl: SafeUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customImg.src']) {
      this.sanitizedUrl = this.sanitizeUrl(this.customImg.src);
    }
  }

  private sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
