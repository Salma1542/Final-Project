import { Component } from '@angular/core';
import { recipes } from './recipesDATA';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrl: './recipe-cards.component.scss'
})
export class RecipeCardsComponent {
  recipe:any=recipes

}
