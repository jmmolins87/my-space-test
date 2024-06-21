import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { typeSkeleton } from './skeleton.config';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  public classSkeleton!: string;

  @Input()
  public typeSkeleton!: typeSkeleton;

  ngOnInit(): void {
    this.changeTypeSkeleton();
  }

  changeTypeSkeleton() {
    switch (this.typeSkeleton) {
      case typeSkeleton.CARD_TOOL:
        this.classSkeleton = 'card-tool';
        break;
      case typeSkeleton.TOOL:
        this.classSkeleton = 'tool';
        break;
    }
  }

}
