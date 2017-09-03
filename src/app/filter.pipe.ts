import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform  {
  transform(value: Array<Object>, filterText: string) {
    if (!filterText) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) >= 0) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
