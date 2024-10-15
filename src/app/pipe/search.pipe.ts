import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from '../interfaces/recipes';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr:IRecipe[], filterTitle:string): IRecipe[] {
    return arr.filter((recipes:IRecipe) => recipes.title?.includes(filterTitle));
  }

}
