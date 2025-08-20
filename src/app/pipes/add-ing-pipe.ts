import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addIng',
  standalone: false
})
export class AddIngPipe implements PipeTransform {

  transform(value: string): string {
    return "Ing. "+value;
  }

}
