import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../interfaces/recipes';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrl: './recipe-cards.component.scss'
})
export class RecipeCardsComponent implements OnInit {
  recipe:IRecipe[]=[]
  ngOnInit(): void {
    let recipes=new DataService()
    this.recipe=recipes.getRecipe()
  }

}
