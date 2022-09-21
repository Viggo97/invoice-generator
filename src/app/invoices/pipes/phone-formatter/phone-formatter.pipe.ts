import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormatter',
})
export class PhoneFormatterPipe implements PipeTransform {
  transform(value: string, isLast: boolean): string {
    return isLast ? value : `${value}, `;
  }
}
