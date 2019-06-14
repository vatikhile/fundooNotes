import { Pipe, PipeTransform } from '@angular/core';
import {Notes} from '../core/model/Notes/notes'

@Pipe({
  name: 'noteSearchPipe'
})
export class NoteSearchPipePipe implements PipeTransform {
 
  transform(allNote: Notes[], searchTerm: string): any {
    if (!allNote || !searchTerm) {
      return allNote;
    }
    return allNote.filter(data =>
      data.title.toLowerCase().indexOf(searchTerm) !== -1
      || data.description.toLowerCase().indexOf(searchTerm) !== -1)
  }
}
 

// // import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
//    }
// }

