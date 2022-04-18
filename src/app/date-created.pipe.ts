import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCreated'
})
export class DateCreatedPipe implements PipeTransform {

  transform(value: any) {
      // THIS CALCULATES THE CURRENT DATE AND TIME //
    let currentYear: any = new Date().getFullYear();
    let yearDifference = (currentYear - parseInt(value));
    return yearDifference;
  }

}
