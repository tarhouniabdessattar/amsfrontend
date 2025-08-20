import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUppercase',
  standalone: false
})
export class FirstLetterUppercasePipe implements PipeTransform {

  transform(value:string): string {
    return value[0].toUpperCase()+value.substring(1).toLowerCase();
  }

}
