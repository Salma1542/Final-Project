import { Component, DoCheck } from '@angular/core';
import { IRecipe } from '../../../../../interfaces/recipes';
import { DataService } from '../../../../../services/data.service';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrl: './recipe-category.component.scss'
})
export class RecipeCategoryComponent implements DoCheck{
  details!:IRecipe[];
  constructor(
    private dataService : DataService
  ){}
  ngDoCheck(): void {
    this.details = this.dataService.getRecipe();
  }
}
