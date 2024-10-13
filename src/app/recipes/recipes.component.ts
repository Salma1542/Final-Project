import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IRecipe } from '../interfaces/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  recipes:IRecipe[]=[];
  p:number = 1;
  itemsPerPage:number = 8;
  totalRecipe:any;
  title:string = '';
  course:string = '';
  cookTime:number = 0;
  ingredients:string = '';
  directions:string = '';
  photoUrl:string = '';
  showFirst(){
    return this.recipes.slice(0,14);
  }
  ngOnInit(): void {
    let dataService= new DataService;
    this.recipes = dataService.getRecipe();
    this.totalRecipe = this.recipes.length;
  }

  pushRecipe(){
    this.recipes.unshift(
      {
        "id": null,
        "title": this.title,
        "course": this.course,
        "cuisine": null,
        "mainIngredient": null,
        "description": null ,
        "source": null,
        "url": null,
        "urlHost": null,
        "prepTime": null,
        "cookTime": this.cookTime,
        'totalTime': null,
        'servings': null,
        'yield': null ,
        'ingredients': this.ingredients,
        'directions': this.directions,
        'rating': null,
        'publicUrl': null,
        'photoUrl': this.photoUrl,
        'private': null,
        'nutritionalScoreGeneric': null,
        'calories':null ,
        'fat': null ,
        'cholesterol': null,
        'sodium': null ,
        'sugar': null ,
        'carbohydrate': null,
        'fiber': null,
        'protein': null,
        'cost': null,
        'tags': null,
      }
    )
    this.title = '';
    this.course = '';
    this.cookTime = 0;
    this.ingredients = '';
    this.directions = ' ';
    this.photoUrl = ' ';
  }

}
