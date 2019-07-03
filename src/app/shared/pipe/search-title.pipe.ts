import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTitle'
})
export class SearchTitlePipe implements PipeTransform {

  transform(value: string, args?: string): any {
    const regex = /([a-zA-Z]+)(.)([a-zA-Z]+)/;
    const match = regex.exec(value);
    const newValue = match[1].charAt(0).toUpperCase();// + match[1].slice(1 , match[1].length);
    return newValue;
  }

}
