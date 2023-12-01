import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }
    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      return Object.values(item).some((property: any) => {
        if (typeof property === 'string' || property instanceof String) {
          return property.toLowerCase().includes(searchTerm);
        }
        return false;
      });
    });

  }

}
