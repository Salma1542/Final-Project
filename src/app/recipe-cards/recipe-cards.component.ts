
import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../interfaces/recipes';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrl: './recipe-cards.component.scss'
})
export class RecipeCardsComponent implements OnInit {
  recipe: IRecipe[] = [];
  cartRecipe:any[]=[];

  ngOnInit(): void {
    let recipes = new DataService();
    this.recipe = recipes.getRecipe();
  }
  add(recipe: IRecipe): void {
    this.cartRecipe=localStorage.getItem('cartRecipe')?JSON.parse(localStorage.getItem('cartRecipe')!):[];
    this.cartRecipe.push(recipe);

    localStorage.setItem('cartRecipe', JSON.stringify(this.cartRecipe));

    alert(`${recipe.title} has been added to your saved recipes!`);
  }
  dishDetails:any={};
  addDetails(el:IRecipe){
    this.dishDetails={
      title: el.title,
      cooktime: el.cookTime,
      ingredients: el.ingredients,
      directions:el.directions,
      photoUrl:el.photoUrl,
    }
    localStorage.setItem('dishDetails',JSON.stringify(this.dishDetails));


  }


}
