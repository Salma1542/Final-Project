import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IRecipe } from '../interfaces/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  recipe:IRecipe[]=[];
  ngOnInit(): void {
    let dataService= new DataService;
    this.recipe = dataService.getRecipe();
  }
}
