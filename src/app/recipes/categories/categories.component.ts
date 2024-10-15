import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IRecipe } from '../../interfaces/recipes';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  recipe!:IRecipe[]
  ngOnInit(): void {
    let recipeService = new DataService;
    this.recipe = recipeService.getRecipe();
  }
}
