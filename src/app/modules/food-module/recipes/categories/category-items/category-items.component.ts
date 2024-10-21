import { Component, DoCheck, Input, OnInit, Output } from '@angular/core';

import { EventEmitter } from 'stream';
import { map } from 'rxjs';
import { ICategory } from '../../../../../interfaces/category';
import { IRecipe } from '../../../../../interfaces/recipes';
import { DataService } from '../../../../../services/data.service';
@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrl: './category-items.component.scss'
})
export class CategoryItemsComponent implements OnInit {



  categories:ICategory[] = [
    {
      "category" : "Vegetables",
      "images": "../../../assets/images/vegetables.jpg"
    },
    {
      "category" : "Chicken",
      "images": "../../../assets/images/chicken.jpg"
    },
    {
      "category" : "Rice & Grains ",
      "images": "../../../assets/images/rice.avif"
    },
    {
      "category" : "Fruits ",
      "images": "../../../assets/images/fruit.jpg"
    },
    {
      "category" : "Fish",
      "images": "../../../assets/images/fish.jpg"
    },
    {
      "category" : "Breakfast ",
      "images": "../../../assets/images/breakfast.jpg"
    },
    {
      "category" : "Snacks and Sandwiches ",
      "images": "../../../assets/images/snack.jpg"
    },
    {
      "category" : "Desserts",
      "images": "../../../assets/images/dessert.jpg"
    },
    {
      "category" : "Lunch",
      "images": "../../../assets/images/lunch.avif"
    },
    {
      "category" : "Soup",
      "images": "../../../assets/images/soup.jpg"
    },


  ]


recipes!: IRecipe[];
  filteredRecipes: IRecipe[] = [];


  ngOnInit(): void {
    let recipeService = new DataService();
    this.recipes = recipeService.getRecipe();
  }

  filterByRecipe(recipe: IRecipe): void {
    this.filteredRecipes = this.recipes.filter(r => r.mainIngredient === recipe.mainIngredient);
  }

  getUniqueRecipes(ingredientsToRemove: string[] = []) {
        const uniqueIngredients = new Set();

        return this.recipes.filter(recipe => {

          const mainIngredient = recipe.mainIngredient?.trim();
          if (mainIngredient && ingredientsToRemove.includes(mainIngredient)) {
            return false;
          }


          if (mainIngredient && !uniqueIngredients.has(mainIngredient)) {
            uniqueIngredients.add(mainIngredient);
            return true;
          }

          return false;
        });
      };

  constructor(private _dataService: DataService) { }
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
  cartRecipe:any[]=[];
  add(recipe: IRecipe): void {
    this.cartRecipe=localStorage.getItem('cartRecipe')?JSON.parse(localStorage.getItem('cartRecipe')!):[];
    this.cartRecipe.push(recipe);

    localStorage.setItem('cartRecipe', JSON.stringify(this.cartRecipe));

    alert(`${recipe.title} has been added to your saved recipes!`);
  }
}


