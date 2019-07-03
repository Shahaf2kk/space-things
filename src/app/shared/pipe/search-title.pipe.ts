import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTitle'
})
export class SearchTitlePipe implements PipeTransform {

  transform(value: string, args?: string): any {
    const reg = /([a-zA-Z]+)/g;
    const match = value.match(reg);
    return match[0].substr(0, 1).toUpperCase()      +      match[0].substr(1, match[0].length) +
           (match.length < 2 ? '' : (' ' +
           match[1].substr(0, 1).toUpperCase()      +      match[1].substr(1, match[1].length)));
  }

}
