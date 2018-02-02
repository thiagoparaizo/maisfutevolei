import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

 transform(value: any, args?: any): any {

  if (args) {
    return _.filter(value, d => _.find(_.valuesIn(d), v => 
        _.toLower(v).indexOf(_.toLower(args)) !== -1));
  }

 return value;
 }
 } 