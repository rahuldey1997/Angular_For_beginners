import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'percentage',
  standalone: true,
})
export class PercentagePipe implements PipeTransform {

  transform(value:number, fullMark:number, decimal: number=0) {
    return ((value/fullMark)*100).toFixed(decimal)+'%';
  }
}
