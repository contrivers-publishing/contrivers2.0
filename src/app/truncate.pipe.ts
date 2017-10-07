import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  text: string;

  transform(value: string, num: number): string {
    if (value.length < num ) {
      return value;
    }
    this.text = value.substring(0, num);
    return this.text + '...';
  }

}
