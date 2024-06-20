import { Pipe, PipeTransform } from '@angular/core';

import { Tool } from '../interfaces/tool.interface';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(tool: Tool): string {
    if( !tool.image ) {
      return 'assets/no-image.png';
    } else {
      return tool.image;
    }
  }

}
